
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

   // response storage
   private loginResponseSubject = new BehaviorSubject<any>(null);
   loginResponse$ = this.loginResponseSubject.asObservable();

   private resetUserResponseSubject = new BehaviorSubject<any>(null);
   resetUserResponse$ = this.resetUserResponseSubject.asObservable();

   setLoginResponse(response: any) {
     this.loginResponseSubject.next(response);
     console.log(response);
     const res = JSON.stringify(response)
     localStorage.setItem('userDetails',(res));
     return response
   }

   setResetPasswordResponse(response:any){
    this.resetUserResponseSubject.next(response);
    console.log(response);
    const res = JSON.stringify(response);
    localStorage.setItem('resetDetails', (res))
    return response
   }
 
    getUserDetails() {
     const response = this.loginResponseSubject.getValue();
     console.log(response.lastname)
     return response;
   }
   getStoredUserDetails(): any {
    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      try {
        const userDetails = JSON.parse(storedUserDetails);
        return userDetails;
      } catch (error) {
        console.error('Error parsing user details from local storage:', error);
      }
    }

    return null;
  }

   updateUser(updateUserForm: object, userId:any) {
    return this.http.put(`${this.baseUrl}/updateUser/${userId}`, updateUserForm);
  }
    getSingleUser(userId: any): Observable<any>{
      return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
    }

    changePassword(credentials: {old_pass: string; new_pass: string}, userId:any){
      return this.http.put(`${this.baseUrl}/changepassword/${userId}`, credentials)
    }
    forgotPassword(forgotPassForm:any, email:any){
      return this.http.put(`${this.baseUrl}/forgotPassword/${email}`, forgotPassForm)
    }
    forgotPasswordChange(credentials:{password:any, user_type:string}, email:any){
      return this.http.put(`${this.baseUrl}/forgotPasswordChange/${email}`, credentials)
    }
    verifyConfirmOTP(credentials:{OTPcode:string, user_type: string}, email:any){
      return this.http.post(`${this.baseUrl}/OTPVerified/${email}`, credentials )
    }

    addAccesstrail(userCredentials:any){
      return this.http.post(`${this.baseUrl}/addUserAccess`, userCredentials)
    }
}
