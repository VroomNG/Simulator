import { Component, ViewChild } from '@angular/core';
import { ReportsRefComponent } from '../reports-ref/reports-ref.component';
import { SettlementsComponent } from '../settlements/settlements.component';
import { SettlementsPartnerWithdrawRequestsComponent } from '../settlements-partner-withdraw-requests/settlements-partner-withdraw-requests.component';


@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {

  @ViewChild( SettlementsComponent) childRef!:  SettlementsComponent;
  @ViewChild( SettlementsComponent) exportRef!:  SettlementsComponent;

  @ViewChild( SettlementsPartnerWithdrawRequestsComponent) childRef2!:  SettlementsPartnerWithdrawRequestsComponent;
  @ViewChild( SettlementsPartnerWithdrawRequestsComponent) exportRef2!:  SettlementsPartnerWithdrawRequestsComponent;

  @ViewChild( ReportsRefComponent ) childRef3!:  ReportsRefComponent;
  @ViewChild( ReportsRefComponent ) exportRef3!: ReportsRefComponent;

  searchText: string = ''

  pages = [
    { id: 1, name: "Cash Settlements", },
    { id: 2, name: "Withdraw Request", },
    { id: 3, name: "Referal Reports", },
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
  applySearch3(){
    this.childRef2.applyFilter()
  }

  export(){
    this.exportRef.exportExcel()
  }
  
  export2(){
    this.exportRef2.exportExcel()
  }
  export3(){
    this.exportRef3.exportExcel()
  }
  
}
