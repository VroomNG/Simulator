import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InvokeFunctionExpr } from '@angular/compiler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  success:boolean = false;
  failed:boolean = false;

  successMsg:any = 'Success'
  errorMsg:any = 'Failed'

  regular:boolean = false;
  regularMsg:any = 'Regular'

  fetchSubscription!: Subscription;
  rideId: boolean = true;
  loading: boolean = false;
  alert: boolean = false;
  alertMsg: string = 'loading...';
  alertColor: string = 'primary';
  loadingState: boolean = false;

  tripStats: string = '0';
  status: string = '0';

  credentials = {
    trip_id: 0,
  }

  open_trips: any;
  tripResponse: any;
  ongoingTrip: any;
  canceledTrip: any;
  tripComplete: any
  rateTrip: any;

  userDetails: any;

  acceptTrip: boolean = true;
  startTrip: boolean = false;
  cancelTrip: boolean = false;
  completeTrip: boolean = false;

  step1Active: boolean = true;
  step2Active: boolean = false;
  step3Active: boolean = false;
  step4Active: boolean = false;
  step5Active: boolean = false;

  latitude: number = 6.43998479287182;
  longitude: number = 3.40810764049567; 


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

  reload(){
    window.location.reload()
  }

  getOpenTrip() {
    const trip_id = this.credentials.trip_id

    setTimeout(() => {
      this.loading = true
      this.rideId = !this.rideId
    }, 500)

    setTimeout(() => {
      this.Dashboard.getOpenTripsById(trip_id).subscribe(
        (res: any) => {
          console.log('response',res)
          const message = res.data.message

          if(res.status == 200){
            this.open_trips = res.data

            this.rideId = false;
            this.loading = false;

            this.success = true;
            this.successMsg =  message;

            setTimeout(()=>{
              this.success = false
            },2000)
             
          }
        },(error: any) => {

          console.error('An error occurred:', error);
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('message:', error.error.message);
          console.error('http:', error.error.data.message);

          const message = error.error.data.message
          this.failed = true;
          this.errorMsg = message;
          
          this.regular = true;
          this.regularMsg = 'No Trip Found!!'

          setTimeout(() => {
            this.failed = false
            this.regular = false
            window.location.reload()
          }, 30000);
          this.loading = false;
        }

      )
    }, 1500)

  }


  getTripStatus(trip_id: number, longitude: number, latitude:number) {


    if (this.fetchSubscription && !this.fetchSubscription.closed) {
      this.fetchSubscription.unsubscribe(); // Stop previous polling if it exists
    }

    this.fetchSubscription = interval(1000).pipe(

      switchMap(() => this.Dashboard.getTripStatus(trip_id,latitude,longitude))
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
    const latitude = this.latitude
    const longitude = this.longitude

    setTimeout(() => {
      this.Dashboard.accceptTripReq(trip_id,latitude,longitude).subscribe(
        (res: any) => {
          console.log('accept trip res', res)
          // this.acceptTrip = !this.acceptTrip
          this.tripResponse = res.data.trip.security_code;
          console.log('trip response detais', this.tripResponse)
          if (res.success == true) {

            this.alertMsg = 'Trip Accepted'
            this.alertColor = 'success'

            this.loadingState = !this.loadingState

            setTimeout(() => {
              this.alert = false
              this.getTripStatus(trip_id,longitude,latitude)

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

  startTripFunction(tripId: number) {

    const trip_id = tripId;
    this.alert = true
    this.alertMsg = 'Starting your trip...'
    this.alertColor = 'primary'

    const formData = {
      security_code: this.tripResponse
    }
    setTimeout(() => {
      this.Dashboard.startTrip(trip_id, formData).subscribe(
        (res: any) => {
          console.log('start trip res', res)
          // this.open_trips = res.data
          if (res.success === true) {

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

  tripCompleteFunction(tripId: number) {

    this.alert = true
    this.alertMsg = 'Rounding up trip...'
    this.alertColor = 'primary'
    const trip_id = tripId;

    const formData = {
      stop_lat: 6.447809299999999,
      stop_long:  3.4723495,
      // stop_title: "11 Military St",
      stop_address: "Victoria Arobieke St, Lekki Phase I, Lekki 106104, Lagos, Nigeria"
    }

    setTimeout(() => {
      this.Dashboard.completeTrip(trip_id, formData).subscribe(
        (res: any) => {
          console.log('complete trip res', res)
          // this.open_trips = res.data
          if (res.success === true) {

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
          } else if(res.error.data.success === false) {
            window.alert(res.error.data.message)
            window.alert('no paid')
          }
        }
      )
    }, 2000);


  }

  cancelTripFunction(tripId: number) {

    this.alert = true
    this.alertMsg = 'Canceling your trip...'
    this.alertColor = 'primary'

    const trip_id = tripId;

    const formData = {
      driver_canceled_reason: "i was just testing the trip winks"
    }
    setTimeout(() => {
      this.Dashboard.cancelTrip(trip_id).subscribe(
        (res: any) => {
          console.log('cancel trip res', res)

          if (res.success === true) {

            this.alertMsg = res.data.message
            this.alertColor = 'success'

            this.step4Active = true

            setTimeout(() => {
              this.alert = false
            }, 2000);



            this.completeTrip = !this.completeTrip
            this.cancelTrip = !this.cancelTrip

            this.rateTrip = !this.rateTrip

            console.log('cancel message', res.data.message)
          } else {
            window.alert('trip not started')
          }
        }
      )
    }, 2000);


  }

  rateTripFunction(trip_id: any) {

    this.stopFetching()
    setTimeout(() => {
      location.reload()
    })
  }

}
