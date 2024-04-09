import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IRejected } from 'src/app/model/driverInfo';
import { DriversService } from 'src/app/service/driver.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-drivers-rejected',
  templateUrl: './drivers-rejected.component.html',
  styleUrls: ['./drivers-rejected.component.scss']
})
export class DriversRejectedComponent implements OnInit {
  rejected: IRejected[] = []
  showLoader = true;
  checked = false;
  searchText = '';
  userDetails:any


  constructor(private Drivers: DriversService, private users:UsersService){}
  ngOnInit(): void {
    this.Drivers.getRejected().subscribe(
      (res:any)=>{
        console.log(res)
        this.rejected = res.data;
        this.showLoader = false;
        this.sortDrivers()
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
    action: 'Viewed Rejected Drivers'
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
  const filteredAdmins = this.rejected.filter((item) => {
    // Adjust the conditions based on your filtering requirements
    return (
    item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
    item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
    item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
    );
  });
  // Update the table data with the filtered results
  // If you are using server-side filtering, you may need to call an API here
  this.rejected = filteredAdmins;
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.rejected);
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
  this.Drivers.getDrivers().subscribe(
    (res:any)=>{
      console.log(res.data)
      this.rejected = res.data;
      this.showLoader = false;
    }
  )
}
sortDrivers(){
  if(this.rejected){
    console.log('App drivers Exists')
   const newdata = this.rejected.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA;
    });
    console.log('sorted array',newdata)
  }
  }
}