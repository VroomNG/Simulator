import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
 
  constructor() { }

  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the JWT token from your authentication service
    const jwtToken = localStorage.getItem('token');

    console.log('bearer token', jwtToken)

    // Clone the request and add the JWT token to the Authorization header
    if (jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });
    }

    // Pass the cloned request to the next interceptor or the HttpClient if there are no more interceptors
    return next.handle(request);
  }
}
