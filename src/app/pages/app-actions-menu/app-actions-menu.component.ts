import { Component, ViewChild } from '@angular/core';
import { AppActionUninstallComponent } from '../app-action-uninstall/app-action-uninstall.component'; 
import { SurgeChargeComponent } from '../surge-charge/surge-charge.component';
import { DiscountComponent } from '../discount/discount.component';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-app-actions-menu',
  templateUrl: './app-actions-menu.component.html',
  styleUrls: ['./app-actions-menu.component.scss']
})
export class AppActionsMenuComponent {

  @ViewChild( AppActionUninstallComponent) childRef!:  AppActionUninstallComponent;
  @ViewChild( AppActionUninstallComponent) exportRef!:  AppActionUninstallComponent;

  @ViewChild( SurgeChargeComponent) childRef2!:  SurgeChargeComponent;
  @ViewChild( SurgeChargeComponent) exportRef2!:  SurgeChargeComponent;

  @ViewChild( DiscountComponent) childRef3!:  DiscountComponent;
  @ViewChild( DiscountComponent) exportRef3!:  DiscountComponent;

  @ViewChild( NotificationsComponent) childRef4!:  NotificationsComponent;
  @ViewChild( NotificationsComponent) exportRef4!:  NotificationsComponent;

  searchText: string = ''

  pages = [
    { id: 1, name: "Uninstalls", },
    { id: 2, name: "Surge", },
    { id: 3, name: "Discount", },
    { id: 4, name: "Notification", },
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
    // this.childRef.applyFilter()
  }
  
  applySearch2(){
    this.childRef2.applyFilter()
  }
  applySearch3(){
    this.childRef2.applyFilter()
  }

  export(){
    // this.exportRef.exportExcel()
  }
  
  export2(){
    this.exportRef2.exportExcel()
  }
  export3(){
    this.exportRef3.exportExcel()
  }
  export4(){
    this.exportRef4.exportExcel()
  }
  
}
