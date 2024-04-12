import { Component , OnInit} from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fetchSubscription!: Subscription;
  rideId:boolean = true;
  loading:boolean = false;
  alert:boolean = false;
  alertMsg:string = 'loading...';
  alertColor:string = 'primary';
  loadingState:boolean = false;

  tripStats:string = '0';
  status:string = '0';

  credentials = {
    trip_id: 0,
  }

  open_trips:any;
  tripResponse:any;
  ongoingTrip:any;
  canceledTrip:any;
  tripComplete:any
  rateTrip:any;

  userDetails:any;

  acceptTrip:boolean = true;
  startTrip: boolean = false;
  cancelTrip: boolean = false;
  completeTrip: boolean = false;

  step1Active: boolean = true;
  step2Active: boolean = false;
  step3Active: boolean = false;
  step4Active: boolean = false; 
  step5Active: boolean = false; 

 
  constructor(
    private Dashboard: DashboardService
    ) { }

  ngOnInit() {

    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      this.userDetails = JSON.parse(storedUserDetails);
      console.log('in dashboard component:', this.userDetails);

    } else {
      console.log('User details not found in localStorage.');
    }
    }

  getOpenTrip(){
    // alert(this.credentials.trip_id);
    const trip_id = this.credentials.trip_id
    // alert(trip_id)

    setTimeout(()=>{
     this.loading = true
     this.rideId = !this.rideId
    },500)

    setTimeout(()=>{
      this.Dashboard.getOpenTripsById(trip_id).subscribe(
        (res:any)=>{
            console.log(res)
            this.open_trips = res.data
            this.rideId = false;
            this.loading = false;
            // this.acceptTrip = res.success;
        }
    )
     },1500)

  }

  // getTripStatus(trip_id:number){
  //   //  alert(trip_id)
  //    this.Dashboard.getTripStatus(trip_id).subscribe(
  //     (res:any)=>{
  //       console.log('trip status',res)
  //       this.tripStats = res.data.trip_status_code
  //       console.log('trip status code,', this.tripStats)
  //     }
  //    )
  // }
  getTripStatus(trip_id: number) {
    if (this.fetchSubscription && !this.fetchSubscription.closed) {
      this.fetchSubscription.unsubscribe(); // Stop previous polling if it exists
    }
  
    this.fetchSubscription = interval(1000).pipe(
      
      switchMap(() => this.Dashboard.getTripStatus(trip_id))
    ).subscribe(
      (res: any) => {
        console.log('trip status', res);
        console.log('polling...'),
        this.tripStats = res.data.trip_status_code;
        console.log('trip status code', this.tripStats);
      }
    );
  }

  acceptTripFunction(tripId: any) {
    // this.acceptTrip = !this.acceptTrip
    
      this.alert = true
      this.alertMsg = 'accpeting trip...'
      this.alertColor = 'primary'

      const trip_id = tripId;

      setTimeout(() => {
        this.Dashboard.accceptTripReq(trip_id).subscribe(
          (res:any)=>{
              console.log('accept trip res', res)
              // this.acceptTrip = !this.acceptTrip
              this.tripResponse = res.data.trip.security_code;
              console.log('trip response detais', this.tripResponse)
              if(res.success == true){
  
                  this.alertMsg = 'Trip Accepted'
                  this.alertColor = 'success'

                  this.loadingState = !this.loadingState
  
                  setTimeout(() => {
                    this.alert = false
                    this.getTripStatus(trip_id)
                    
                  }, 1000);
                
                  this.acceptTrip = !this.acceptTrip
                  this.startTrip = !this.startTrip
                  console.log('trip response detais', this.tripResponse)
              } else {
                alert('trip not accepted')
              }
          }
      )
      }, 1500);
  }

  startTripFunction(tripId: number){
    
    const trip_id = tripId;
    this.alert = true
    this.alertMsg = 'Starting your trip...'
    this.alertColor = 'primary'

    const formData = {
        security_code: this.tripResponse
    }
    setTimeout(() => {
      this.Dashboard.startTrip(trip_id, formData).subscribe(
        (res:any)=>{
            console.log('start trip res', res)
            // this.open_trips = res.data
            if(res.success === true){

              this.alertMsg = 'Trip Started'
              this.alertColor = 'warning'

              this.step2Active = true
  
              setTimeout(() => {
                this.alert = false
              }, 2000);
  
              this.startTrip = !this.startTrip
              this.completeTrip = !this.completeTrip
              this.cancelTrip = !this.cancelTrip
                this.ongoingTrip = res.data.trip
                 console.log('ongoing trip detais', this.ongoingTrip)
            } else {
              window.alert('trip not started')
            }
        }
     )
    }, 1500);
  
  }

  stopFetching() {
    if (this.fetchSubscription && !this.fetchSubscription.closed) {
      this.fetchSubscription.unsubscribe();
      console.log('Subscription closed.');
    }
  }

  tripCompleteFunction(tripId: number){

    this.alert = true
    this.alertMsg = 'Rounding up trip...'
    this.alertColor = 'primary'
    const trip_id = tripId;

    const formData = {
      stop_lat: 0,
      stop_long: 3.403664923449183,
      stop_title: "11 Military St",
       stop_address: "11 Military St, Lagos Island, Lagos 102273, Lagos, Nigeria"
    }

    setTimeout(() => {
      this.Dashboard.completeTrip(trip_id, formData).subscribe(
        (res:any)=>{
            console.log('complete trip res', res)
            // this.open_trips = res.data
            if(res.success === true){
  
              this.alertMsg = 'Trip Complete'
                this.alertColor = 'success'

                this.step3Active = true;
    
                setTimeout(() => {
                  this.alert = false
                }, 2000);
                
          
  
              this.completeTrip = !this.completeTrip
              this.cancelTrip = !this.cancelTrip
              
              this.tripComplete = res.data.trip

              this.rateTrip = !this.rateTrip
                 console.log('completed trip detais', this.tripComplete)
            } else {
              window.alert('trip not started')
            }
        }
    )
    }, 2000);
    
 
  }

  cancelTripFunction(tripId: number){

    this.alert = true
    this.alertMsg = 'Canceling your trip...'
    this.alertColor = 'primary'
    
    const trip_id = tripId;

    const formData = {
        driver_canceled_reason: "i was just testing the trip winks"
    }
    setTimeout(() => {
      this.Dashboard.cancelTrip(trip_id, formData).subscribe(
        (res:any)=>{
            console.log('cancel trip res', res)
            
            if(res.success === true){
  
              this.alertMsg = res.data.message
              this.alertColor = 'success'

              this.step4Active = true
  
              setTimeout(() => {
                this.alert = false
              }, 2000);

             
  
              this.completeTrip = !this.completeTrip
              this.cancelTrip = !this.cancelTrip

              this.rateTrip = !this.rateTrip
  
                 console.log('cancel message', res.data.message )
            } else {
              window.alert('trip not started')
            }
        }
    )
    }, 2000);

  
  }

  rateTripFunction(trip_id:any){
     
     this.stopFetching()
     setTimeout(() => {
      location.reload()
     })
  }

}
