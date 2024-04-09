import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IAllTrips, ITripSet } from '../model/trips';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  tripSet(tripForm:any){
    return this.http.put(`${this.baseUrl}/api/v1/updatetripsettings`, tripForm)
  }

  getAllTrips(): Observable<IAllTrips[]>{
    return this.http.get<IAllTrips[]>(`${this.baseUrl}/api/v1/trips`);
  }
  getTripset(): Observable<ITripSet[]>{
    return this.http.get<ITripSet[]>(`${this.baseUrl}/api/v1/getSettings`);
  }

}
