import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IDashboard } from '../model/dashboardInfo';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

//  getOpenTrips(token:string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     });

//     return this.http.get<any>(`${this.baseUrl}/driver/trip/get_trips`, { headers: headers });
//   }
 getOpenTripsById(trip_id:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/driver/trip/show/${trip_id}`,);
  }

  accceptTripReq(trip_id:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/accept/${trip_id}`, { headers: headers });
  }
  
  startTrip(trip_id:number, formData:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/start/${trip_id}`, formData, { headers: headers });
  }

  cancelTrip(trip_id:number, formData:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/cancel/${trip_id}`, formData, { headers: headers });
  }
  completeTrip(trip_id:number, formData:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/complete/${trip_id}`, formData, { headers: headers });
  }

 





}

