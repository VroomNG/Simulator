import { Component, OnInit, Input, Output } from '@angular/core';
import { RouteInfo } from 'src/app/model/routesInfo';
import { ROUTES, Router } from '@angular/router';
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   @Output() displayDialog:boolean  = false;
  
  constructor(private router: Router) {}

  isActive(routePath: string): boolean {
      return this.router.isActive(routePath, true);
  }
  onLogOut(){
    window.alert('hello')
    this.displayDialog = true
   }

  ngOnInit() {}

  ROUTES: RouteInfo[] = [
    { id: 0, path: '/dashboard', title: 'Simulator', icon: 'fa fa-store', class: '', children: '' },
    // { id: 0.2, path: '/users', title: 'Users', icon: 'fa-solid fa-user-tie', class: '', children: [] },
    // { id: 1, path: '/trips-menu', title: 'Trips', icon: 'fa-solid fa-chess', class: '', children: [] },
    // { id: 2, path: '/vehicles-menu', title: 'Vehicles', icon: 'fa-solid fa-truck-monster text-primary', class: '', children: [] },
    // { id: 3, path: '/reviews-menu', title: 'Review and Ratings', icon: ' fa-solid fa-handshake text-primary', class: '', children: [] },
    // { id: 4, path: '/activity-log', title: 'Activity log', icon: 'fa-solid fa-car text-primary', class: '', children: [] },
    // { id: 5, path: '/e-menu', title: 'Explore', icon: 'fa-solid fa-motorcycle text-primary', class: '', children: [] },
    // { id: 6, path: '/app-actions-menu', title: 'App Actons', icon: 'fa-solid fa-bus', class: '', children: [] },
  
  ];
} 



export { ROUTES };