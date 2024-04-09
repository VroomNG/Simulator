import { Component, OnInit, OnDestroy} from '@angular/core';;
// import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';

interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'forgot-password-update.component.html',
  styleUrls: ['./forgot-password-update.component.scss']
})
export class ForgotPasswordUpdateComponent implements OnInit {

  // userType!: Users[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false
  resetDetails:any;
  hidePassword: boolean = true;
  password: any;
  confirmPassword: string = '';


    constructor( 
      public router: Router,
      private users: UsersService
      ) { }
  
      ngOnInit() {
        const storedUserDetails = localStorage.getItem('resetDetails');
    // check if the gotten items exists in local storage
      if (storedUserDetails) {
      // Parse the storedUserDetails JSON string to an object
      this.resetDetails = JSON.parse(storedUserDetails);
      console.log('otp component:', this.resetDetails);

    } else {
      console.log('User details not found in localStorage.');
    }
     this.user_Type_retrieved = this.resetDetails.user_type;
     console.log(this.user_Type_retrieved)

    //  this.user_Type_retrieved = new FormControl(this.user_Type_retrieved,[Validators.required, Validators.minLength(4)])
      }

      // password:any;
      user_Type_retrieved!:string

      async resetPassword(){
        const email = this.resetDetails.email
        const password = this.password
        const  user_type = this.user_Type_retrieved
        console.log(email),
        console.log(password)
        console.log(user_type)
  
        const credentials = {
          user_type: user_type,
          password: this.password
        }

        console.log(credentials)
        setTimeout(() => {
          this.showAlert = true
          this.alertMsg = 'Loading... If sync persists check network'
          this.alertColor = 'info'
         try {   
          this.users.forgotPasswordChange(credentials, email).subscribe( 
            (res:any) => {
              console.log(res)
              if(res.code == "100"){
                window.alert('Password failed');
                this.inSubmission = false
              } 
              else if(res.code == "200"){
                window.alert('Reset Successful Now login')
                this.router.navigate(['/login']) 
                localStorage.clear()
                
              }
    
            }
          );
    
        }
        catch(e){
        }
          }, 1600)
       


    }
    

}
