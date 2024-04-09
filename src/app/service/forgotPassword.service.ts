import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../configuration';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, public config: Configuration) { }

//   public get currentUserValue(): User {
//     return this.currentUserSubject.value;
// }


    forgotPassword(inputParameter: { password: any; confirmPassword: any; },id: any) {
      debugger;     
      return this.http.put(this.config.forgotPass + '/' + id , JSON.stringify(inputParameter), this.httpOptions);
  }

}
