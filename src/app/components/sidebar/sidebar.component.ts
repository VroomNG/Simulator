import { Component, OnInit, Input, Output } from '@angular/core';
import { RouteInfo } from 'src/app/model/routesInfo';
import { ROUTES, Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.service';
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   @Output() displayDialog:boolean  = false;
   cancelMode = false;

   credentials = {
    trip_id: 0,
  }
  
  constructor(private router: Router, private Dashboard: DashboardService) {}

  isActive(routePath: string): boolean {
      return this.router.isActive(routePath, true);
  }

  ngOnInit() {}

  ROUTES: RouteInfo[] = [
    { id: 0, path: '/dashboard', title: 'Simulator', icon: 'fa fa-store', class: '', children: '' },

  
  ];

  cancelTrip() {

    this.cancelMode = !this.cancelMode
    const trip_id = this.credentials.trip_id

    setTimeout(() => {
      this.Dashboard.cancelTrip(trip_id).subscribe(
        (res: any) => {
          console.log('cancel trip res', res)
          const message = res.data.message

          if (res.success === true) {
            // this.success = true
            // this.successMsg = message
            alert(message)
            this.cancelMode = !this.cancelMode
            setTimeout(() => {
              // this.success = false
            }, 2000);

            console.log('cancel message', res.data.message)
            
          } else if (res.success == false){
            // this.failed = true;
            // this.errorMsg = message;

            setTimeout(() => {
              // this.failed = false
            }, 2000);
          }
        },(error:any)=>{

          console.log('Cancel Trip error', error)
          console.error('status:', error.status);
          console.error('success:', error.error.success);
          console.error('http:', error.error.data.message);

          const message = error.error.data.message
          alert(message)

          this.cancelMode  = !this.cancelMode
          // this.failed = true;
          // this.errorMsg = message;

          setTimeout(() => {
            // this.failed = false
            // window.location.reload()
          }, 2000);
        }
      )
    }, 2000);


  }
  
} 



export { ROUTES };