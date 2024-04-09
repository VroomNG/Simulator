import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IPartners } from '../model/partners';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  addPartners(partnersForm:any){
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'token': 'TOPSECRETE'
    // });
    return this.http.post(`${this.baseUrl}/addAdmin`, partnersForm)
  }

  getPartners(): Observable<IPartners[]>{
    return this.http.get<IPartners[]>(`${this.baseUrl}/partners`);
  }

  getSinglePartners(partnerId: any): Observable<IPartners[]>{
    return this.http.get<IPartners[]>(`${this.baseUrl}/users/${partnerId}`);
  }

  deletePartner(partnerId:any) {
    return this.http.delete(`${this.baseUrl}/users/${partnerId}`);
  }
  
  updatePartner(editPartnerForm: object, partnerId:any) {
    return this.http.put(`${this.baseUrl}/updateUser/${partnerId}`, editPartnerForm);
  }

}


