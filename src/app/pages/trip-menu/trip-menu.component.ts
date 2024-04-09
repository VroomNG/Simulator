import { Component, ViewChild } from '@angular/core';
import { TripsComponent } from '../trips/trips.component';

@Component({
  selector: 'app-trip-menu',
  templateUrl: './trip-menu.component.html',
  styleUrls: ['./trip-menu.component.scss']
})
export class  TripMenuComponent {
  
@ViewChild(TripsComponent) childRef!:  TripsComponent;

  users = [
    // { id: 1, name: "All Trips", },
    { id: 1, name: "Completed", },
    { id: 2, name: "Cancelled",  },
    { id: 3, name: "In Progress",  },
    { id: 4, name: "Scheduled",  },
 ]
 searchText: string = ''
 addNewAdmin: boolean = false;

 constructor(){}
  ngOnInit() {
    
  }
 
  activeIndex: number = 0;
  // activeUserData: string = this.users[0].data;

  setActive(index: number) {
    this.activeIndex = index;
    // this.activeUserData = this.users[index].data;
  }

  // getRouterLink(index: number): string {
  //   switch(index) {
  //     case 0:
  //       return '/add-admin';
  //     case 1:
  //       return '/add-drivers';
  //     case 2:
  //       return '/add-riders';
  //     case 3:
  //       return '/add-partners';
  //     default:
  //       return '/';
  //   }
  // }

  applySearch(){
    this.childRef.applyFilter()
  }


}
