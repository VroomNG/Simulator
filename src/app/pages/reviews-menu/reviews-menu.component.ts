import { Component, ViewChild } from '@angular/core';
import { RatingsDriverComponent } from '../ratings-driver/ratings-driver.component';
import { RatingsRiderComponent } from '../ratings-rider/ratings-rider.component';
@Component({
  selector: 'app-reviews-menu',
  templateUrl: './reviews-menu.component.html',
  styleUrls: ['./reviews-menu.component.scss']
})
export class ReviewsMenuComponent {
  
  @ViewChild(RatingsDriverComponent) childRef!: RatingsDriverComponent;
  @ViewChild(RatingsRiderComponent) childRef2!: RatingsRiderComponent;

  searchText: string = ''

  pages = [
    { id: 1, name: "Trip Review (Drivers)", },
    { id: 2, name: "Trip Review (Riders)", },
 ]

 activeIndex: number = 0;

  setActive(index: number) {
    this.activeIndex = index;

  }

  getRouterLink(index: number): string {
    switch(index) {
      case 0:
        return '/add-vehicle';
      case 1:
        return '/';
      case 2:
        return '/';
      case 3:
        return '/';
      default:
        return '/';
    }
  }

  applySearch(){
    this.childRef.applyFilter()
  }
  
  applySearch2(){
    this.childRef2.applyFilter()
  }
  


}
