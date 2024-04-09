import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IRatings_D } from 'src/app/model/driverInfo';
import { DriversService } from 'src/app/service/driver.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-ratings-driver',
  templateUrl: './ratings-driver.component.html',
  styleUrls: ['./ratings-driver.component.scss']
})
export class RatingsDriverComponent implements OnInit {

  @Input() searchText: string = '';

  showNoResults:boolean = false;
  moreActions:boolean = false;
  drivers: IRatings_D [] = [];
  viewRatings: IRatings_D | any;
  deleteRowId: number | null = null;
  showLoader = true;
  userDetails:any;

  displayDialog:boolean = false;
  selectedUserId:any = null;
  
  editedAdmin1: IRatings_D | any;
  editedRowId: number | null = null;
  


  constructor(private Drivers: DriversService, private users:UsersService){}
  ngOnInit(): void {
    this.Drivers.getDriversRatings().subscribe(
      (res:any)=> {
        console.log(res.data)
        this.drivers = res.data
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
      action: 'Viewed Driver Ratings'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

    userAction(userId: any) {
      if (this.selectedUserId === userId) {
          this.selectedUserId = null; // Hide the card actions if the same user is clicked again
      } else {
          this.selectedUserId = userId; // Show the card actions for the clicked user
      }
  }

  applyFilter() {
    const filteredAdmins = this.drivers.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.driverName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.riderName.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.drivers= filteredAdmins;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.drivers);
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
    location.reload()
  }

  deleteDriver(drivers:any){
    this.drivers = { ...drivers }; // Create a copy to avoid modifying the original data; 
    this.deleteRowId = drivers.id;
    
    let driverId = this.deleteRowId
    window.alert(driverId)
    this.Drivers.deleteDriverReview(driverId).subscribe(
      (res:any)=>{
        console.log(res);
       
          window.alert('Successfully deleted')
          location.reload()
       
      }
    )
  }

  editAdmin(admin: IRatings_D):any {
    this.editedAdmin1 = { ...admin }; // Create a copy to avoid modifying the original data; 
    this.editedRowId = admin.id;
    this.displayDialog = true;
    this.selectedUserId = null; 
  }

  toggleDialog(){
    this.displayDialog = !this.displayDialog
  }



  
}
