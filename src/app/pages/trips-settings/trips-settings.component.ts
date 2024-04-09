import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TripService } from 'src/app/service/trips.service';
import { UsersService } from 'src/app/service/users.service';

interface Idata {
  id:number,
  name: string,
}

@Component({
  selector: 'app-trips-settings',
  templateUrl: './trips-settings.component.html',
  styleUrls: ['./trips-settings.component.scss']
})


export class TripsSettingsComponent implements OnInit {

  tripSettings: | any;
  isActive = true;
  userDetails: any;

  showAlert = false;
  alertMsg = 'please wait...';
  alertColor = 'primary';
  searchText = ''
  readonly:boolean = true;

  constructor(
    private Trips: TripService,
    private users: UsersService,
  ){}

  ngOnInit(){
    this.Trips.getTripset().subscribe(
      (res:any)=>{
        console.log(res);
        this.tripSettings =  res.data[0]
        console.log(this.tripSettings)
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
      action: 'Viewed Past Trips'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  free_wait_time = new FormControl('',[Validators.required, Validators.minLength(0)])
  mst_per_min_rate = new FormControl('',[Validators.required, Validators.minLength(0)])
  nil = new FormControl('',[Validators.required,])
 
  tripForm = new FormGroup({
    free_wait_time: this. free_wait_time,
    mst_per_min_rate: this.mst_per_min_rate,
  })

  onSubmit(){

    console.log(this.tripForm.value);
    this.Trips.tripSet(this.tripForm.value).subscribe(
      (res:any)=>{
        if(res.code == 200){
          window.alert('Updated successfully');
          location.reload();
          this.isActive = !this.isActive               
        }else {
          window.alert('An error occured!!')
        }
      }
    )
  }

  enableForm(){
    this.isActive = !this.isActive
  }
}
