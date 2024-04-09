import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, } from '@angular/forms';
import { PartnerService } from 'src/app/service/partners.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-partners-add',
  templateUrl: './partners-add.component.html',
  styleUrls: ['./partners-add.component.scss']
})
export class PartnersAddComponent {
  // Variables
  cities!: City[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';
  userDetails:any
  displayDialog:boolean = false;

  // constructor and live cycle methods
  constructor(private partners:PartnerService, private users:UsersService, private router:Router){ 
  }

  ngOnInit(){
    this.displayDialog = true;
    this.cities = [
      { name: 'Abia' },
      { name: 'Enugu' },
      { name: 'Bauchi' },
      { name: 'Calabar' },
      { name: 'Uyo' },
      { name: 'Port Harcourt' },
      { name: 'Abuja' },
      { name: 'Lagos'},
  ];

  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()
  }
 
  // validators 
    
  firstname = new FormControl('',[Validators.required, Validators.minLength(3)]);
  lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.minLength(3)]);
  phone_no = new FormControl('',[Validators.required, Validators.minLength(3)]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  user_type = new FormControl('5',[Validators.required, Validators.minLength(3)]);
  city = new FormControl('',[Validators.required, Validators.minLength(3)]);
  supervisor = new FormControl('',[Validators.required, Validators.minLength(3)]);
  profile_url =  new FormControl('https://res.cloudinary.com/xenxei46/image/upload/v1658140049/taskpilot/dummy_avatar_a6o0qx.png',[Validators.required, Validators.minLength(3)]);
  holder_name = new FormControl('',[Validators.required, Validators.minLength(3)]);
  account_number = new FormControl('',[Validators.required, Validators.minLength(3)]);
  bank_name = new FormControl('',[Validators.required, Validators.minLength(3)]);
  location = new FormControl('',[Validators.required, Validators.minLength(3)]);
  IFSC_code = new FormControl('',[Validators.required, Validators.minLength(3)]);
  payment_email = new FormControl('',[Validators.required, Validators.minLength(3)]);
  
  // Grouped Form
  addPartners = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone_no: this.phone_no,
    password: this.password,
    user_type: this.user_type,
    city: this.city,
    supervisor: this.supervisor,
    profile_url: this.profile_url,
    holder_name: this.holder_name,
    account_number: this.account_number,
    bank_name: this.bank_name,
    location: this.location,
    IFSC_code: this.IFSC_code,
    payment_email: this.payment_email
    
  })

  // Functions
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed Add Partners'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  onSubmit(){
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      const partnerData = this.addPartners.value
      console.log(partnerData)
      this.partners.addPartners(partnerData).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = 'Partner Added, Email sent for verification, please verify your email';
          this.alertColor = "success"
         } else {
          this.alertMsg = 'something went wrong check connectivity and try again';
          this.alertColor = 'danger'
         }
         }
        
      )
      }, 1600)
      
  }

  reset(){
    this.addPartners.reset()
  }

  close(){
    this.displayDialog = !this.displayDialog;
    this.router.navigate(['/users'])
  }
}

