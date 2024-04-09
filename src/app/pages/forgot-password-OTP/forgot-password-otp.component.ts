import { Component, OnInit} from '@angular/core';;
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';

interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'forgot-password-otp.component.html',
  styleUrls: ['./forgot-password-otp.component.scss']
})
export class ForgotPasswordOtpComponent implements OnInit {

  userType!: Users[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false

  emailParam!: string;
  otpValue: string = '';

  resetDetails:any;

    constructor( 
      public router: Router,
      private activatedRoute: ActivatedRoute,
      private users: UsersService
    ) { }
  
      ngOnInit() {
        const storedUserDetails = localStorage.getItem('resetDetails');
        this.activatedRoute.params.subscribe(params => {
          const email = params['email'];
          this.emailParam = email
          console.log(email)
        });
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
  
        this.userType = [
          { type: 'Super Admin', code: '4' },
          { type: 'Sub Admin', code: '3' },
          { type: 'Partner', code: '5' },
      ]; 
      }

      // OTPcode!:string;
      user_Type_retrieved!:string

    async submitOTP(){

      this.showAlert = true;
      const email = this.resetDetails.email
      const OTPcode = this.otpValue
      const  user_type = this.user_Type_retrieved
      console.log(email),
      console.log(OTPcode)
      console.log(user_type)

      const credentials = {
        user_type: user_type,
        OTPcode: this.otpValue
      }

      console.log(credentials)

      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
     try {   
      this.users.verifyConfirmOTP(credentials, email).subscribe( 
        (res:any) => {
          console.log(res)
          if(res.code == "100"){
            window.alert('Incorrect OTP');
            this.inSubmission = false
          } 
          else if(res.code == "200"){
            window.alert('OTP Verified')
            this.router.navigate(['/forgot-password-update']) 
          }

        }
      );

    }
    catch(e){
    }
      }, 1600)


    }
    
    handleOtpChange(otp: string) {
      this.otpValue = otp;
      console.log('OTP:', this.otpValue);
      // You can perform any further processing with the OTP value here
    }

}
