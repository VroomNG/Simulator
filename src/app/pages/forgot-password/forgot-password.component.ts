import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userType!: Users[] |  undefined;
  resetDetails = {}
  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false
  

    constructor( 
      public router: Router,
      private users: UsersService,
      private location: Location
      ) { 
        // this.location.onUrlChange((url: string, state: unknown) => {
        //   console.log('URL changed', url)
        // })
      }
  
      ngOnInit() {
        this.userType = [
          { type: 'Super Admin', code: '4' },
          { type: 'Sub Admin', code: '3' },
          { type: 'Partner', code: '5' },
        ]; 
      }

      user_type = new FormControl('',[Validators.required, Validators.minLength(1)])
      // // email = new FormControl('',[Validators.required, Validators.minLength(3)])
      email = ''

      forgotPassForm = new FormGroup({
        // email: this.email,
        user_type: this.user_type,
      })

      async submitEMail(){
      this.showAlert = true;
      console.log(this.forgotPassForm.value)

      const email = this.email
      let {user_type} = this.forgotPassForm.value
      const adminType = user_type

      console.log('to be stored')
      console.log(email)
      console.log(adminType)
      
      console.log('destructured to be stored')
      const resetDetails = this.resetDetails = {
          email,
          user_type
        }
        
      console.log(resetDetails),

      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
     try {   
      this.users.forgotPassword(this.forgotPassForm.value, email).subscribe( 
        (res:any) => {
          console.log(res)
          if(res.code == "100"){
            window.alert('failed to send otp')
            // this.alertMsg = res.message
            // this.alertColor = 'danger'
            this.inSubmission = false
          } 
          else if(res.code == "200"){
            window.alert('OTP Sent')
            this.users.setResetPasswordResponse(resetDetails)
            const email = this.email
            // this.alertMsg = "OTP Sent"
            // this.alertColor = "success"
            this.router.navigate([`/forgot-password-otp/${email}`]);
            // <a routerLink="/users/{{admins.id}}/edit"> 

          //   setTimeout(() => {
          //   // localStorage.clear()
            
          // }, 1600)
          }

        }
      );

    }
    catch(e){
    }
      }, 1600)


    }
    

}
