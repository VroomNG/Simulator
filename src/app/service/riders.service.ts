import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IRiders, IRatings_R } from '../model/ridersinfo';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  private user = 1;
  private baseUrl = environment.serverUrl;
  
  constructor(public http: HttpClient) { }
  
  addRiders(addRiders:any){
    return this.http.post(`${this.baseUrl}/newUserEntry`, addRiders)
  }

  updateRider(editRiderForm: object, riderId:any) {
    return this.http.put(`${this.baseUrl}/updateUser/${riderId}`, editRiderForm);
  }

  deleteRider(riderId:any) {
    return this.http.delete(`${this.baseUrl}/users/${riderId}`);
  }
  deleteRiderReview(riderId:any) {
    return this.http.delete(`${this.baseUrl}/api/v1/deletedriverReview/${riderId}`);
  }

  getRiders():Observable<IRiders[]>{
    return this.http.get<IRiders[]>(`${this.baseUrl}/getAllUsers`);
  }

  getSingleRider(riderId: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/users/${riderId}`);
  }

  getRidersRatings(): Observable<IRatings_R[]>{
    return this.http.get<IRatings_R[]>(`${this.baseUrl}/api/v1/riderReview/${this.user}`);
  }
}
