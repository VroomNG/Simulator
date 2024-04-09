import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { ICash, IPartnerWRQ } from '../model/settlements';

@Injectable({
  providedIn: 'root'
})
export class settlementService {

  private baseUrl = environment.serverUrl
  constructor(public http: HttpClient) { }
 

  getCash(): Observable<ICash[]>{
    return this.http.get<ICash[]>(`${this.baseUrl}/api/v1/driverCash`)
  }

  getWithdrawRequest(): Observable<ICash[]>{
    return this.http.get<ICash[]>(`${this.baseUrl}/api/v1/withdrawRequest`)
  }
  getPartnerWRQ(): Observable<IPartnerWRQ[]>{
    return this.http.get<IPartnerWRQ[]>(`${this.baseUrl}/api/v1/partnerWithdrReq`)
  }

 

}