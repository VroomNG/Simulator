import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/service/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-drivers-edit',
  templateUrl: './drivers-edit.component.html',
  styleUrls: ['./drivers-edit.component.scss']
})
export class DriversEditComponent implements OnInit {

  drivers: any;
  driverId: any;
  userDetails:any

  cities!: City[] |  undefined;
  vehicles!: City[] |  undefined;

  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';

  displayDialog:boolean = false;

  constructor(
    private Drivers: DriversService,
    private route: ActivatedRoute,
    private router: Router,
    private users:UsersService
  ){

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

this.driverId = this.route.snapshot.paramMap.get('id')
  console.log(this.driverId)
  this.Drivers.getSingleDriver(this.driverId).subscribe(
    (res:any)=>{
      console.log(res)
      this.drivers = res.data
      console.log(this.drivers)
    }
  )

  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()

}

addAccessTrail(){
  const {email} = this.userDetails
  console.log(email)

  const userCredetials = {
    login: email,
    action: 'Viewed Drivers Edit'
  }

  this.users.addAccesstrail(userCredetials).subscribe(
    (res:any)=>{
      const {message} = res
      if(message === "Success insering access"){
       } else {}
    }
  )
}


updateDriver() {

  this.showAlert = true;

   var editDriverForm = {
     firstname: this.drivers.firstname,
     lastname: this.drivers.lastname,
     email: this.drivers.email,
     phone_no: this.drivers.Phone_no,
     password: this.drivers.password,
     city: this.drivers.city,
     user_type: this.drivers.user_type,
   }

   console.log(editDriverForm)
   this.Drivers.updateDriver(editDriverForm, this.driverId).subscribe({
     next: (res:any) => {
    if(res.code === 200){
     this.alertMsg = 'User Updated',
     this.alertColor = 'success'
    } else {
     this.alertMsg = 'Update failed!!, ERROR from Server ',
     this.alertColor = 'danger'
    }
     }
   })
  
 }

 deleteDriver() {
     window.alert('are you sure?');
     const driverId = this.driverId;
     console.log(driverId)
     // this.displayDialog = true;
 
       this.Drivers.deleteDriver(driverId).subscribe((res:any) => {
         console.log(res);
         const response = res.data;

         if(res.code == 200){
           window.alert('successfully deleted')
           this.router.navigate(['/dashboard']);
         } else {
           window.alert('failed to delete user')
         }
       })
   
   }

   onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // this.licence_docu.setValue(file); // Update the form control with the selected file
  }
  onFileSelected1(event: any) {
    const file: File = event.target.files[0];
    // this.insurance_docu.setValue(file); // Update the form control with the selected file
  }
  onFileSelected2(event: any) {
    const file: File = event.target.files[0];
    // this.vehicle_docu.setValue(file); // Update the form control with the selected file
  }
  onFileSelected3(event: any) {
    const file: File = event.target.files[0];
    // this.multi_docu.setValue(file); // Update the form control with the selected file
  }


  close(){
  
    this.displayDialog = !this.displayDialog;
    this.router.navigate(["/users"])
   }

  

  
}
