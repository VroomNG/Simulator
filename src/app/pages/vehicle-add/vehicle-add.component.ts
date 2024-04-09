import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, } from '@angular/forms';
import { VehicleService } from 'src/app/service/vehicle.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

interface Options {
  id: number,
  name: string
}


@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent  implements OnInit {
  // addVehicleForm!: FormGroup
  options?: Options[] |  undefined;
  make_list?: Options[] |  undefined;
  model_list?: Options[] | undefined;
  trip_type_list?: Options[] | undefined;
  selectActive?: Options[]  | undefined;
  years: number[] = [];
  // value1: number = 0;
  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';
  userDetails:any
  displayDialog:boolean = false;

  selectedOption: any;
  form: any;
  
  constructor(private vehicle: VehicleService, private users: UsersService, private router:Router){
    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    this.years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
    
  }

  ngOnInit(){

    this.displayDialog = true;

    this.options = [
      { id: 1, name: 'SUV' },
      { id: 2, name: 'Sedan' },
      { id: 3, name: 'Coupe' },
      { id: 4, name: 'Convertible' },
      { id: 5, name: 'Hatchback' },
      { id: 6, name: 'Van' },
      { id: 8, name: 'Minivan' },
      { id: 9, name: 'Wagon' },
    ];

    this.make_list = [
      { id: 1, name: 'Ford' },
      { id: 2, name: 'Honda' },
      { id: 3, name: 'Hyundai' },
      { id: 4, name: 'Toyota' },
      { id: 5, name: 'Suzuki' },
      { id: 6, name: 'Jaguar' },
      { id: 7, name: 'KIA' },
      { id: 8, name: 'mahindra' },
      { id: 9, name: 'Nissan' },
      { id: 10, name: 'Ferari' },
      { id: 11, name: 'Audi' },
      { id: 12, name: 'BMW' },
      { id: 13, name: 'Holden' },
      { id: 14, name: 'Bently' },
      { id: 15, name: 'Bugatti' },
      { id: 16, name: 'Mercedes-Benz' },
      { id: 17, name: 'Rolls Royce' },
      { id: 18, name: 'Fiat' },
      { id: 19, name: 'Alpha Romeo' },
      { id: 20, name: 'Acura' },
      { id: 21, name: 'Dalcia' },
      { id: 22, name: 'Renault' },
      { id: 23, name: 'Volvo' },
      { id: 24, name: 'Mini' },
      { id: 25, name: 'Buick' },
   

    ];

    this.model_list = [
      { id: 1, name: 'Yaris Hatchback' },
      { id: 2, name: 'Tundra Regular Cab' },
    ];
    this.trip_type_list = [
      { id: 1, name: 'Daily' },
      { id: 2, name: 'Weekly' },
      { id: 3, name: 'Montly' },
      { id: 4, name: 'Annually' },
    ];
    this.selectActive = [
      {id: 1, name: 'Yes'},
      {id: 0, name: 'No'},
    ]
    const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    this.addAccessTrail()
  }

  vehicle_type = new FormControl('', [Validators.required,]);
  minimum_fare = new FormControl('', [Validators.required, Validators.minLength(1)]);
  make = new FormControl('', [Validators.required,]);
  model = new FormControl('', [Validators.required,]);
  trip_type = new FormControl('', [Validators.required,]);
  commission = new FormControl('', [Validators.required, Validators.minLength(1)]);
  per_km_rate = new FormControl('', [Validators.required, Validators.minLength(1)]);
  isactive = new FormControl('', [Validators.required, Validators.minLength(1)]);
  per_minute_rate = new FormControl('', [Validators.required, Validators.minLength(1)]);
  base_fare = new FormControl('', [Validators.required, Validators.minLength(1)]);
  tolls_fees = new FormControl('', [Validators.required, Validators.minLength(1)]);
  available_seat = new FormControl('', [Validators.required, Validators.minLength(1)]);
  description = new FormControl('', [Validators.required, Validators.minLength(1)]);
  year = new FormControl('', [Validators.required, Validators.minLength(1)]);
  cancel_charge_driver = new FormControl('', [Validators.required, Validators.minLength(1)]);
  cancel_charge_rider = new FormControl('', [Validators.required, Validators.minLength(1)]);
  peek_hour_fare = new FormControl('', [Validators.required, Validators.minLength(1)]);
  vehicle_image = new FormControl('img');

  addVehicleForm = new FormGroup({
    vehicle_type: this.vehicle_type,
    minimum_fare: this.minimum_fare,
    make: this.make,
    model: this.model,
    trip_type: this.trip_type,
    commission: this.commission,
    per_km_rate: this.per_km_rate,
    isactive: this.isactive,
    per_minute_rate: this.per_minute_rate,
    base_fare: this.base_fare,
    tolls_fees: this.tolls_fees,
    available_seat: this.available_seat,
    description: this.description,
    year: this.year,
    cancel_charge_driver: this.cancel_charge_driver,
    cancel_charge_rider: this.cancel_charge_driver,
    peek_hour_fare: this.peek_hour_fare,
    vehicle_image: this.vehicle_image
  })

  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed Vehicle Add'
    }

    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        // console.log(res)
        const {message} = res
        if(message === "Success insering access"){
        //  console.log('access trail added')
         } else {
        // console.log('not added')
         }
      }
    )
  }

  onSubmit(){
    console.log(this.addVehicleForm.value)
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      const addvehicleData = this.addVehicleForm.value
      this.vehicle.addVehicle(addvehicleData).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = 'Vehicle successfully added';
          this.alertColor = "success"
         } else {
          this.alertMsg = 'something went wrong check connectivity and try again';
          this.alertColor = 'danger'
         }
         }
        
      )
      }, 1600)
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
    this.router.navigate(["/vehicles-menu"])
   }

   reset(){
    this.addVehicleForm.reset()
  }  

}
