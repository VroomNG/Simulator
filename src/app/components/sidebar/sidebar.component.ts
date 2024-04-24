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

  
  ];
} 



export { ROUTES };