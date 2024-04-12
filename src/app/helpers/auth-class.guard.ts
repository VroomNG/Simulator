import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthClassGuard implements CanActivate {

  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    console.log('In auth guard');
    console.log('token', token);
    if(token){
      return true
    }
    else {
      this.router.navigate(['login'])};
       return false
    }
   
 }

 export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, user is logged in, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false; // Prevent access to the login page
    } else {
      return true; // Allow access to the login page
    }
  }
}
