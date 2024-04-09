import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.serverUrl;
  private authToken: string = ""; 

  constructor(private http: HttpClient) { }

  // login function
  login(credentials: { email_or_phone: string; password: string, user_type: string, device_token: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(`${this.baseUrl}/login`, credentials, { headers: headers });
  }
  
    // logout function
    logout(token: any) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      });
    //   const headers = {
    //     "Authorization": "Bearer {YOUR_AUTH_KEY}",
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    // };
      console.log('log out function',token)
      return this.http.post(`${this.baseUrl}/logout`, { headers: headers });
    }
  
  }




