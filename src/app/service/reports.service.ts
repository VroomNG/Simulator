import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IReferal } from '../model/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = environment.serverUrl;
  
  constructor(public http: HttpClient) { }
  getReferal(): Observable<IReferal[]>{
    return this.http.get<IReferal[]>(`${this.baseUrl}/api/v1/referralReports`);
  }

}
