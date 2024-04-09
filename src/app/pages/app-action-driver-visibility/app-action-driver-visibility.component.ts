import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { ActionService } from 'src/app/service/action.service';
import { IVisibility } from 'src/app/model/actions';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-app-action-driver-visibility',
  templateUrl: './app-action-driver-visibility.component.html',
  styleUrls: ['./app-action-driver-visibility.component.scss']
})
export class AppActionDriverVisibilityComponent implements OnInit {

  visibility: IVisibility[]=[];
  showLoader = true;
  searchText:string = ''
  userDetails:any

  constructor(
    private AppAction: ActionService,
    private users: UsersService,
  ){}

  ngOnInit() {
    this.AppAction.getDriverVisibility().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.visibility = res.data
        this.showLoader = false;
      }
    )
    const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    this.addAccessTrail()
  }

  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed Driver Visibility'
    }

    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.visibility.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.user.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.visibility = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.visibility);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'admins');
    });

}
saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
  clear(){
    this.searchText = '',
    this.AppAction.getDriverVisibility().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.visibility = res.data;
        this.showLoader = false;
      }
    )
  }


}
