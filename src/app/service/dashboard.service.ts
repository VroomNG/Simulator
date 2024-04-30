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

 getOpenTripsById(trip_id:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/driver/trip/show/${trip_id}`,);
  }
 getTripStatus(trip_id:number,longitude: number, latitude: number): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${token}`,
  });
    return this.http.get<any>(`${this.baseUrl}/driver/trip/status/${trip_id}?longitude=${longitude}&latitude=${latitude}`,  { headers: headers });
  }

  accceptTripReq(trip_id:number, longitude: number, latitude: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/accept/${trip_id}?longitude=${longitude}&latitude=${latitude}`, { headers: headers });
  }
  
  startTrip(trip_id:number, formData:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/start/${trip_id}`, formData, { headers: headers });
  }

  cancelTrip(trip_id:number, latitude: number, longitude: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/cancel/${trip_id}?longitude=${longitude}&latitude=${latitude}`, { headers: headers });
  }

  completeTrip(trip_id:number, formData:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.put<any>(`${this.baseUrl}/driver/trip/complete/${trip_id}`, formData, { headers: headers });
  }

  cardPayment(trip_id:number, cardPayload:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.put<any>(`${this.baseUrl}/pay/cash/${trip_id}`, cardPayload,  { headers: headers });
  }
  cashPayment(trip_id:number, cashPayload:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.put<any>(`${this.baseUrl}/pay/card/${trip_id}`, cashPayload, { headers: headers });
  }
  bankTransferPayment(trip_id:number, bankPayload:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this.http.put<any>(`${this.baseUrl}/pay/bank_transfer/${trip_id}`, bankPayload, { headers: headers });
  }



  
}

