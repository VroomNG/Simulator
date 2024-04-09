import { Component, OnInit } from '@angular/core';
import { IAllTrips } from 'src/app/model/trips';
import { TripService } from 'src/app/service/trips.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-trips-upcoming',
  templateUrl: './trips-upcoming.component.html',
  styleUrls: ['./trips-upcoming.component.scss']
})
export class TripsUpcomingComponent {
  trips: IAllTrips[] = [];
  showLoader = true;
  userDetails: any;
  
  constructor(private Trips: TripService, private users:UsersService){}
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
      action: 'Viewed Upcoming Trips'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}
}
