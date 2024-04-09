import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { ICash } from 'src/app/model/settlements';
import { settlementService } from 'src/app/service/settlements.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.scss']
})
export class SettlementsComponent implements OnInit {

  @Input() searchText: string = '';

  settlements: ICash [] = [];
  showLoader = true;
  userDetails:any
  showNoResults:boolean = false;
  moreActions:boolean = false;
  displayDialog:boolean = false;

  originalData = this.settlements;
  selectedUserId:any = null;
  transactionDtls: ICash | any;
  editedRowId: number | null = null;

  constructor(private Settlements: settlementService, private users:UsersService){}

  ngOnInit(): void {
    this.Settlements.getCash().subscribe(
      (res:any) => {
        console.log(res.data)
        this.settlements = res.data
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
      action: 'Viewed Settlements'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  applyFilter() {
    const filteredAdmins = this.settlements.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase())  &&  
      item.total_commission >= item.last_commission &&
      item.last_settlement_date <= item.next_settlement_date 
      // item.last_settlement_date >= startDate && item.next_settlement_date <= endDate
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.settlements = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.settlements);
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
    location.reload();  
  }

  viewTransactionDtl(cash: ICash):any {
    this.transactionDtls = { ...cash }; // Create a copy to avoid modifying the original data; 
    this.editedRowId = cash.id;
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
