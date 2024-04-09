import { Component , OnInit} from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rideId:boolean = true;
  loading:boolean = false;
  alert:boolean = false;
  alertMsg:string = 'loading...';
  alertColor:string = 'primary';
  loadingState:boolean = false;

  credentials = {
    trip_id: 0,
  }

  open_trips:any;
  acceptedTrip:any;
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
  step4Active: boolean = false; // Added for step 4
  step5Active: boolean = false; // Added for step 5

 
  constructor(
    private Dashboard: DashboardService
    ) { }

  ngOnInit() {

    const storedUserDetails = localStorage.getItem('userDetails');
    // check if the gotten items exists in local storage
    if (storedUserDetails) {
      // Parse the storedUserDetails JSON string to an object
      this.userDetails = JSON.parse(storedUserDetails);
      console.log('in dashboard component:', this.userDetails);

    } else {
      console.log('User details not found in localStorage.');
    }

    // this.getOpenTrip()
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
              if(res.success == true){
  
                  this.alertMsg = 'Trip Accepted'
                  this.alertColor = 'success'

                  this.loadingState = !this.loadingState
  
                  setTimeout(() => {
                    this.alert = false
                  }, 2000);
                
                  this.acceptTrip = !this.acceptTrip
                  this.startTrip = !this.startTrip
                // this.startTrip == res.success;
                  this.acceptedTrip == res.data.trip
                 console.log('accepted trip detais', this.acceptTrip)
                // this.cancelTrip == true;
              } else {
                alert('trip not accepted')
              }
          }
      )
      }, 1500);

     
      // console.log('trip id', trip_id)
      // console.log('trip token', token)
       
    
  }

  startTripFunction(tripId: number){
    
    const trip_id = tripId;
    this.alert = true
    this.alertMsg = 'Starting your trip...'
    this.alertColor = 'primary'

    const formData = {
        security_code: 33864
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
     window.alert('opps no APi')
  }

  
  
 

}
