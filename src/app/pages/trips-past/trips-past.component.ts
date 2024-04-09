import { Component, OnInit } from '@angular/core';
import { IAllTrips } from 'src/app/model/trips';
import { TripService } from 'src/app/service/trips.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-trips-past',
  templateUrl: './trips-past.component.html',
  styleUrls: ['./trips-past.component.scss']
})
export class TripsPastComponent implements OnInit {
  trips: IAllTrips[] = [];
  showLoader = true;
  userDetails:any
  
  constructor(private Trips: TripService, private users: UsersService){}
  ngOnInit(): void {
    this.Trips.getAllTrips().subscribe(
      (res:any) =>{
        console.log(res.data)
        this.trips = res.data
        this.showLoader = false;
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
}
