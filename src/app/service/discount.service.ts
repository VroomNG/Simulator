import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IDiscount } from '../model/discountInfo';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }
  getDiscounts(): Observable<IDiscount[]>{
    return this.http.get<IDiscount[]>(`${this.baseUrl}/api/v1/discount`);
  }
 
  addDiscount(addDiscount:any){
    return this.http.post(`${this.baseUrl}/api/v1/discount`, addDiscount);
  }
}
