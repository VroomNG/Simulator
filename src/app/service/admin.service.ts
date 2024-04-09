import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IAdmin, IAccessTrail,IQuest } from '../model/admins';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  addAdmin(adminForm:any){
    return this.http.post(`${this.baseUrl}/addAdmin`, adminForm)
  }
  addQuest(questForm:any){
    return this.http.post(`${this.baseUrl}/api/v1/quest`, questForm)
  }
  addQuestLocation(locationForm:any){
    return this.http.post(`${this.baseUrl}/api/v1/questLocation`, locationForm)
  }
  
  updateAdmin(editAdminForm: object, adminId:any) {
    // const userId = admin.id; // Assuming 'id' is the property that represents the user ID
    return this.http.put(`${this.baseUrl}/updateUser/${adminId}`, editAdminForm);
  }
  updateQuest(editQuestForm: object, questId:any) {

    return this.http.put(`${this.baseUrl}/api/v1/quest/${questId}`, editQuestForm);
  }

  deleteAdmin(adminId:any) {
    // const userId = admin.id; // Assuming 'id' is the property that represents the user ID
    return this.http.delete(`${this.baseUrl}/users/${adminId}`);
  }
  deleteQuest(questId:any) {
    return this.http.delete(`${this.baseUrl}/api/v1/quest/${questId}`);
  }

  getAdmins(): Observable<IAdmin[]>{
    return this.http.get<IAdmin[]>(`${this.baseUrl}/api/v1/adminView`);
  }
  getQuest(): Observable<IQuest[]>{
    return this.http.get<IQuest[]>(`${this.baseUrl}/api/v1/quests`);
  }

  getSingleQuest(questId: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/api/v1/quest/${questId}`);
  }
  
  getSingleAdmin(adminId: any): Observable<IAdmin[]>{
    return this.http.get<IAdmin[]>(`${this.baseUrl}/users/${adminId}`);
  }
  
  getAccessTrail(): Observable<IAccessTrail[]>{
    return this.http.get<IAccessTrail[]>(`${this.baseUrl}/getAccessLog`);
  }

}

