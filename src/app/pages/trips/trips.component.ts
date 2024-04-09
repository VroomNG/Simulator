import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IAllTrips } from 'src/app/model/trips';
import { TripService } from 'src/app/service/trips.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {


 @Input() searchText: string = '';

 showNoResults:boolean = false;
 moreActions:boolean = false;
  
  trips: IAllTrips[] = [];
  viewTrips: IAllTrips | any;
  viewRowId: number | null = null;
  displayDialog: boolean = false;
  showLoader = true;
  userDetails:any

  loaderColor!: 'primary';
  editedUser: IAllTrips | any;
  selectedUserId:any = null;
  editedRowId: number | null = null;
  
  constructor(private Trips: TripService, private users:UsersService){}
  ngOnInit(): void {
    this.Trips.getAllTrips().subscribe(
      (res:any) =>{
        console.log(res.data)
        this.trips = res.data
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
      action: 'Viewed Trips'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}
  viewTrip(trip: IAllTrips):any {
    this.viewTrips = { ...trip }; // Create a copy to avoid modifying the original data; 
    this.viewRowId = trip.id;
    this.displayDialog = true;
  }
  applyFilter() {
    const filteredAdmins = this.trips.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.vehicle_type.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.trips = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.trips);
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
  this.Trips.getAllTrips().subscribe(
    (res:any) =>{
      console.log(res.data)
      this.trips = res.data
      this.showLoader = false;
    }
  )
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

userAction(userId: any) {
  if (this.selectedUserId === userId) {
      this.selectedUserId = null; // Hide the card actions if the same user is clicked again
  } else {
      this.selectedUserId = userId; // Show the card actions for the clicked user
  }
}

 

}

