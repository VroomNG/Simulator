import { Component, ViewChild } from '@angular/core';
import { VehicleTypeComponent } from '../vehicle-type/vehicle-type.component';

@Component({
  selector: 'app-vehicles-menu',
  templateUrl: './vehicles-menu.component.html',
  styleUrls: ['./vehicles-menu.component.scss']
})

export class VehiclesMenuComponent {

  @ViewChild(VehicleTypeComponent) childRef!: VehicleTypeComponent;

  searchText: string = ''

  pages = [
    { id: 1, name: "Types", },
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

 
}
