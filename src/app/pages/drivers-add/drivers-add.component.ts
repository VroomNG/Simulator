import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, } from '@angular/forms';
import { DriversService } from 'src/app/service/driver.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-drivers-add',
  templateUrl: './drivers-add.component.html',
  styleUrls: ['./drivers-add.component.scss']
})
export class DriversAddComponent implements OnInit {

  userDetails:any
// variables
  cities!: City[] |  undefined;
  vehicles!: City[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';

  displayDialog:boolean = false

// constructor and lifecycle methods
  constructor(
    private drivers: DriversService, 
    private users:UsersService,
    private router:Router)
      {
     }

  ngOnInit(){

    this.displayDialog = true;

    this.vehicles = [
      { name: 'SUV', code: 'NY' },
      { name: 'Sedan', code: 'RM' },
      { name: 'Van', code: 'LDN' },
  ];
  this.cities = [
    { name: 'Abia',  code: 'abia'},
    { name: 'Enugu',  code: 'enu' },
    { name: 'Bauchi',  code: 'bau' },
    { name: 'Calabar',  code: 'cal' },
    { name: 'Uyo', code: 'uyo' },
    { name: 'Port Harcourt',  code: 'ph' },
    { name: 'Abuja',  code: 'abj' },
    { name: 'Lagos',  code: 'lag'},
];

const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()

}
   // validators & formcontrols

  //  license_docu!: FormControl;
    
   firstname = new FormControl('',[Validators.required, Validators.minLength(3)]);
   lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
   email = new FormControl('', [Validators.required, Validators.minLength(3)]);
   phone_no = new FormControl('',[Validators.required, Validators.minLength(3)]);
   password = new FormControl('', [Validators.required, Validators.minLength(3)]);
   user_type = new FormControl('2',[Validators.required, Validators.minLength(3)]);
   city = new FormControl('',[Validators.required, Validators.minLength(3)]);
   supervisor = new FormControl('',[Validators.required, Validators.minLength(3)]);
   profile_url = new FormControl('',[Validators.required, Validators.minLength(3)]);
   holder_name = new FormControl('',[Validators.required, Validators.minLength(3)]);
   account_number = new FormControl('',[Validators.required, Validators.minLength(3)]);
   bank_name = new FormControl('',[Validators.required, Validators.minLength(3)]);
   location = new FormControl('',[Validators.required, Validators.minLength(3)]);
   IFSC_code = new FormControl('',[Validators.required, Validators.minLength(3)]);
   payment_email = new FormControl('',[Validators.required, Validators.minLength(3)]);
   licence_no = new FormControl('',[Validators.required, Validators.minLength(3)]);
   licence_docu = new FormControl(<any>[Validators.required, Validators.minLength(3)]);
   insurance_docu = new FormControl(<any>[Validators.required, Validators.minLength(3)]);
   vehicle_docu = new FormControl(<any>[Validators.required, Validators.minLength(3)]);
   multi_docu = new FormControl(<any>[Validators.required, Validators.minLength(3)]);
   vehicle_type = new FormControl('',[Validators.required, Validators.minLength(3)]);
 
   // Grouped Form
   addDrivers = new FormGroup({
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
    payment_email: this.payment_email,     
    licence_no: this.licence_no,     
    licence_docu: this.licence_docu,     
    insurance_docu: this.insurance_docu,     
    vehicle_docu: this.vehicle_docu,     
    multi_docu: this.multi_docu,     
    vehicle_type: this.vehicle_type     
   })
  //  functions 
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed Add Drivers'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )
  }
  submit(){
    console.log(this.addDrivers.value)
    // window.alert('in process')
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      const driverData = this.addDrivers.value
      console.log(driverData)
      this.drivers.addDrivers(driverData).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = res.message
          this.alertColor = "success"
         } else {
          this.alertMsg = res.message;
          this.alertColor = 'danger'
         }
         } 
      )
      }, 1600)
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.licence_docu.setValue(file); // Update the form control with the selected file
  }
  onFileSelected1(event: any) {
    const file: File = event.target.files[0];
    this.insurance_docu.setValue(file); // Update the form control with the selected file
  }
  onFileSelected2(event: any) {
    const file: File = event.target.files[0];
    this.vehicle_docu.setValue(file); // Update the form control with the selected file
  }
  onFileSelected3(event: any) {
    const file: File = event.target.files[0];
    this.multi_docu.setValue(file); // Update the form control with the selected file
  }


reset(){
  this.addDrivers.reset()
}  
  close(){
    // window.alert('close')
    this.displayDialog = !this.displayDialog;
    setTimeout(() => {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/users', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
    }, 500);
    this.router.navigate(["/users"])
   }
}
