import { Component } from '@angular/core';
import { IApproved_Drivers } from 'src/app/model/driverInfo';
import { DriversService } from '../../service/driver.service';
import * as FileSaver from 'file-saver';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-drivers-approved',
  templateUrl: './drivers-approved.component.html',
  styleUrls: ['./drivers-approved.component.scss']
})
export class DriversApprovedComponent {

  app_drivers: IApproved_Drivers [] = [];
  checked = false;
  userDetails:any;
  displayDialog:boolean = false;

  loaderColor!: 'primary';
  showLoader = true;
  searchText: string = '';
  editedUser: IApproved_Drivers | any;
  showNoResults:boolean = false;
  selectedUserId:any = null;
  originalData = this.app_drivers;
 

  editedRowId: number | null = null;


  constructor(
    private approved_drivers : DriversService, private users:UsersService
  ){

  }
  ngOnInit(): void {
    this.approved_drivers.getDrivers().subscribe(
      (res:any) => {
        console.log(res.data)
        this.app_drivers = res.data;
        this.showLoader = false;
        this.sortDrivers()
        
      }
    );
    
  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()
  }

  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed Approved Drivers'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )
  }

  userAction(userId: any) {
    if (this.selectedUserId === userId) {
        this.selectedUserId = null; // Hide the card actions if the same user is clicked again
    } else {
        this.selectedUserId = userId; // Show the card actions for the clicked user
    }
}

  applyFilter() {
    // const filteredUsers = this.app_drivers.filter((item) => {
    //   // Adjust the conditions based on your filtering requirements
    //   return (
    //   item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //   item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //   item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
    //   );
    // });
    // // Update the table data with the filtered results
    // // If you are using server-side filtering, you may need to call an API here
    // this.app_drivers = filteredUsers;
    const inputField = this.searchText.trim();
    // if(inputField === ''){
    //   this.approved_drivers.getDrivers().subscribe(
    //     (res:any)=> {
    //       this.app_drivers = res.data
    //       this.showLoader = false;
    //       // this.showNoResults = false;
    //      })
    //     this.app_drivers = this.originalData
    //     // this.showNoResults = true
    // }
    const filteredAdmins = this.app_drivers.filter((admin:any) => {
      // Adjust the conditions based on your filtering requirements
      return (
        admin.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (admin.lastname && admin.lastname.toLowerCase().includes(this.searchText.toLowerCase())) ||
        admin.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (admin.phone_no && admin.phone_no.toLowerCase().includes(this.searchText.toLowerCase())) ||
        admin.user_type.toString().includes(this.searchText)
      );
    });
    this.app_drivers = filteredAdmins;
    // Check if there are any results
    //     if (filteredAdmins.length  === 0) {
    //       setTimeout(() => {
    //         this.showNoResults = true; 
    //       }, 1000);
         
    //       // Set a flag to show "No Search Result" message
    //     } else {
    //       this.showNoResults = false; // Hide the "No Search Result" message if there are results
    //     }
    // console.log('hello')
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.app_drivers);
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
    this.approved_drivers.getDrivers().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.app_drivers = res.data;
        this.showLoader = false;
      }
    )
  }

    sortDrivers(){
      if(this.app_drivers){
        console.log('App drivers Exists')
      const newdata = this.app_drivers.sort((a, b) => {
          const dateA = new Date(a.created_at).getTime();
          const dateB = new Date(b.created_at).getTime();
          return dateB - dateA;
        });
        console.log('sorted array',newdata)
      }
      }

      editUser(user: any):any {
        this.editedUser = { ...user }; // Create a copy to avoid modifying the original data; 
        this.editedRowId = user.id;
        this.displayDialog = true;
        this.selectedUserId = null; 
      }
      toggleDialog(){
        this.displayDialog = !this.displayDialog
      }

}