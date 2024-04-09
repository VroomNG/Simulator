import { Component } from '@angular/core';
import { MockdataService } from 'src/app/data/mockdata.service';
import { dashboardInfo } from 'src/app/model/dashboardInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  
  constructor(private mockDataService: MockdataService) {}

  // dashboard_data = this.mockDataService.dashboard_data
  IDashboard = dashboardInfo;
  dashboard: dashboardInfo [] = [
    {
      id:1,
      title: 'RIDERS',
      Number:654, 
      isThismonth: false,
   },
    {
      id:2,
      title: 'DRIVERS',
      Number:156, 
      isThismonth: false,
   },
    {
      id:3,
      title: 'VEHICLES',
      Number:3, 
      isThismonth: false,
   },
    {
      id:4,
      title: 'COMPLETED TRIPS',
      Number:0, 
      isThismonth: false,
   },
    {
      id:5,
      title: 'TOTAL TRIPS',
      Number:0, 
      isThismonth: false,
   },
    {
      id:6,
      title: 'TOTAL TRIP PAYMENT',
      Number: 17518000, 
      isThismonth: false,
   },
    {
      id:7,
      title: 'TOTAL TRIP COMMISION',
      Number: 453200, 
      isThismonth: false,
   },
    {
      id:8,
      title: 'TOTAL DRIVER EARNED',
      Number: 96074300, 
      isThismonth: false,
   },
  

  ]
}
