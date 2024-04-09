import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../configuration';
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { loginInfo } from '../model/loginInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // / private currentUserSubject: BehaviorSubject<loginInfo>;
  // // public currentUser: Observable<loginInfo>;/

  constructor(private http: HttpClient, public config: Configuration) {
    // this.currentUserSubject = new BehaviorSubject<loginInfo>
    // (
    // JSON.parse(localStorage.getItem("currentUser"))
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  //  public get currentUserValue(): loginInfo {
  //   console.log(this.currentUserSubject.value);
  //   return this.currentUserSubject.value;
  // }


  AuthorizeUser(userRequest: { email: any; password: any; }) {
    debugger;
    // var userInput = {
    //   userName: userRequest.userName,
    //   password: userRequest.password      
    // }
    return this.http.post(this.config.authorizeAPI, JSON.stringify(userRequest), this.httpOptions)
    // .pipe(
    //   map(result => {
    //     console.log('aravindh ==>', result.token);
    //     // localStorage.setItem('token', result.data.token);
    //     return true;
    //   })
    // );
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  addInteraction(userid: string | null,op: string)
  {
    var userInput = {
      login:userid,
      action:op
    }
    return this.http.post(this.config.addUserAccess,JSON.stringify(userInput),this.httpOptions)
  }

}
