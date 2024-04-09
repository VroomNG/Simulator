import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators, } from '@angular/forms';
import { RiderService } from 'src/app/service/riders.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-riders-add',
  templateUrl: './riders-add.component.html',
  styleUrls: ['./riders-add.component.scss']
})
export class RidersAddComponent {
  // variables
  cities!: City[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';
  userDetails:any;
  displayDialog:boolean = false;
  
  // constructors & lifecycles
  constructor(private riders: RiderService, private users:UsersService, private router:Router ){
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
// functions
// validators & formcontrols
    
firstname = new FormControl('',[Validators.required, Validators.minLength(3)]);
lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
email = new FormControl('', [Validators.required, Validators.minLength(3)]);
phone_no = new FormControl('+234',[Validators.required, Validators.minLength(3)]);
password = new FormControl('', [Validators.required, Validators.minLength(3)]);
user_type = new FormControl('1',[Validators.required, Validators.minLength(3)]);
city = new FormControl('',[Validators.required, Validators.minLength(3)]);
balance = new FormControl('',[Validators.required, Validators.minLength(0)]);
ref_by = new FormControl('SAMUELD1122',[Validators.required, Validators.minLength(0)]);
profile_url = new FormControl('https://res.cloudinary.com/xenxei46/image/upload/v1682686741/boy_rexp5y.png',[Validators.required, Validators.minLength(0)]);
device_token = new FormControl('ertyu1',[Validators.required, Validators.minLength(0)]);
device_type = new FormControl('1',[Validators.required, Validators.minLength(0)]);
ride_check = new FormControl('1',[Validators.required, Validators.minLength(0)]);
country_code = new FormControl('NG',[Validators.required, Validators.minLength(0)]);
country_dailing_code = new FormControl('+234',[Validators.required, Validators.minLength(0)]);

// Grouped Form
addRiders = new FormGroup({
  firstname: this.firstname,
  lastname: this.lastname,
  email: this.email,
  phone_no: this.phone_no,
  password: this.password,
  user_type: this.user_type,
  city: this.city,
  balane: this.balance,
  ref_by: this.ref_by,
  profile_url: this.profile_url,
  device_token: this.device_token,
  device_type: this.device_type,
  ride_check: this.ride_check,
  country_code: this.country_code,
  country_dailing_code: this.country_dailing_code

})
addAccessTrail(){
  const {email} = this.userDetails
  console.log(email)

  const userCredetials = {
    login: email,
    action: 'Viewed Add Riders'
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
    const ridersData = this.addRiders.value
    // console.log(ridersData)
    this.riders.addRiders(ridersData).subscribe(
      (res:any) => {
       console.log(res)
       if(res.code == 200){
        this.alertMsg = res.message,
        this.alertColor = "success"
       } else {
        this.alertMsg = res.message,
        this.alertColor = 'danger'
       }
       } 
    )
    }, 1600)
}

close(){
  this.displayDialog = !this.displayDialog;
  this.router.navigate(["/users"])
 }


reset(){
  this.addRiders.reset()
}  


}
