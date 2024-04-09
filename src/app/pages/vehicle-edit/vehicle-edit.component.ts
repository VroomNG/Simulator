import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/service/vehicle.service';
import { UsersService } from 'src/app/service/users.service';

interface Options {
  id: number,
  name: string
}

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})

export class VehicleEditComponent implements OnInit {

  vehicleId!: any;
  vehicleType!: any;

  options?: Options[] |  undefined;
  make_list?: Options[] |  undefined;
  model_list?: Options[] | undefined;
  trip_type_list?: Options[] | undefined;
  selectActive?: Options[]  | undefined;
  years: number[] = [];
  userDetails:any
  displayDialog:boolean = false;

  selectedOption: any;
  form: any;
  showAlert:boolean = false;
  alertMsg = 'please wait...';
  alertColor = 'primary';

  constructor(
    private Vehicle: VehicleService,
    private route: ActivatedRoute,
    private router: Router, 
    private users: UsersService
    ) {
      const currentYear = new Date().getFullYear();
    const startYear = 1990;
    this.years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
    }
  ngOnInit() {
    this.displayDialog = true
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    console.log(this.vehicleId);
    this.Vehicle.getSingleVehicle(this.vehicleId).subscribe(
      (res:any)=>{
        console.log(res)
        this.vehicleType = res.data
        console.log(this.vehicleType)
      }
  
    )

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
  
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed Vehicle Edit'
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

  update() {
    this.showAlert = true;
    this.alertMsg = 'please wait if sync persisct check network';
    this.alertColor = 'primary';
      var editVehicleForm = {
      vehicle_type: this.vehicleType.vehicle_type,
      minimum_fare: this.vehicleType.minimum_fare,
      make: this.vehicleType.make,
      model: this.vehicleType.model,
      trip_type: this.vehicleType.trip_type,
      commission: this.vehicleType.commission,
      per_km_rate: this.vehicleType.per_km_rate,
      isactive: this.vehicleType.isactive,
      per_minute_rate: this.vehicleType.per_minute_rate,
      base_fare: this.vehicleType.base_fare,
      tolls_fees: this.vehicleType.tolls_fees,
      available_seat: this.vehicleType.available_seat,
      description: this.vehicleType.description,
      year: this.vehicleType.year,
      cancel_charge_driver: this.vehicleType.cancel_charge_driver,
      cancel_charge_rider: this.vehicleType.cancel_charge_driver,
      peek_hour_fare: this.vehicleType.peek_hour_fare,
      vehicle_image: this.vehicleType.vehicle_image
    }

    console.log(editVehicleForm)
    this.Vehicle.updateVehicle(editVehicleForm, this.vehicleId).subscribe({
      next: (res:any) => {
        console.log(res)
        if(res.code == 200){
          this.alertMsg = 'Updated successfully';
          this.alertColor = 'success';
        } else {
          this.alertMsg = 'Updated failed';
          this.alertColor = 'danger';
        }
      }
    })
   
  }

  deleteVehicle() {
      window.alert('are you sure?');
      const vehicleId = this.vehicleId;
      console.log(vehicleId)
  
        this.Vehicle.deleteVehicleType(vehicleId).subscribe((res:any) => {
          console.log(res);
          if(res.code == 200){
            window.alert('successfully deleted')
            this.router.navigate(['/dashboard']);
          } else {
            window.alert('failed to delete user')
          }
        })
    
    }

    close(){
  
      this.displayDialog = !this.displayDialog;
      this.router.navigate(["/vehicles-menu"])
     }

}
