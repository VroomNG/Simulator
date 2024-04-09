import { Component, ViewChild } from '@angular/core';
import { MapsComponent } from '../maps/maps.component';
import { AdminViewQuestComponent } from '../admin-view-quest/admin-view-quest.component';

@Component({
  selector: 'app-explorer-menu',
  templateUrl: './explorer-menu.component.html',
  styleUrls: ['./explorer-menu.component.scss']
})
export class ExplorerMenuComponent {
  
  @ViewChild(  MapsComponent) childRef!:   MapsComponent;

  @ViewChild( AdminViewQuestComponent) childRef2!:  AdminViewQuestComponent;
  @ViewChild( AdminViewQuestComponent) exportRef2!:  AdminViewQuestComponent;

  searchText: string = ''

  pages = [
    { id: 1, name: "Maps", },
    { id: 2, name: "Quests", },
    { id: 3, name: "Access Trail", },

 ]

 activeIndex: number = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }

  getRouterLink(index: number): string {
    switch(index) {
      case 0:
        return '/';
      case 1:
        return '/add-quest';
      case 2:
        return '/';
      case 3:
        return '/';
      default:
        return '/';
    }
  }

 
  applySearch(){
    this.childRef2.applyFilter()
  }
  
  
  export(){
    this.exportRef2.exportExcel()
  }


}
