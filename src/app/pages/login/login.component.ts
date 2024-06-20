import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false;
  hidePassword: boolean = true;
  
    credentials = {
      email_or_phone: '',
      password: '',
      device_token: "15545671"
    }
  
    constructor( 
      private auth:AuthService, 
      public router: Router,
      private users: UsersService
      ) { }
  
    ngOnInit(): void {
      
    }
    async login(){
      this.showAlert = true;
      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
        try {
          this.auth.login(this.credentials).subscribe( 
            (res:any) => {
              console.log('user response',res.data)
              if(res.success === true){
                this.alertMsg = "Successfly Logged in"
                this.alertColor = 'success'
                // console.log(res)
                const {token} = res.data;
                const userObject = res.data.user.user_profile
                const email = res.data.user.email
                console.log(token, userObject, email);

                const userDtls = {
                  ...userObject,
                  email: email
                }

                console.log(userDtls)

                localStorage.setItem('token', token)
                this.users.setLoginResponse(userDtls);
                  this.router.navigate(['/dashboard']);
              } 
              else {
                this.alertMsg = "failed to log in"
                this.alertColor = "danger",
                this.inSubmission = false
              }

            }
          );

        }
        catch(e){
        }
          }, 1600)
        }

}
