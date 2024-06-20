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
  login(credentials: { email_or_phone: string; password: string, device_token: string }) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "x-api-public-key": "VR_PUBLIC_X5OEKoqTXPxr2B",
      "x-api-secret-key": "VR_SECRET_AtUXf0YYkE6tGO"
    });

    return this.http.post(`${this.baseUrl}/login`, credentials, { headers: headers });
  }
  
    // logout function
    logout(token: any) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        "x-api-public-key": "VR_PUBLIC_X5OEKoqTXPxr2B",
      "x-api-secret-key": "VR_SECRET_AtUXf0YYkE6tGO"
      });
  
      console.log('log out function',token)
      return this.http.post(`${this.baseUrl}/logout`, { headers: headers });
    }
  
  }




