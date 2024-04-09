import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IReferal } from 'src/app/model/reports';
import { ReportService } from 'src/app/service/reports.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-reports-ref',
  templateUrl: './reports-ref.component.html',
  styleUrls: ['./reports-ref.component.scss']
})
export class ReportsRefComponent implements OnInit {

  @Input() searchText: string = '';
 
  referal: IReferal[] = [];
  showLoader = true; 
  userDetails:any

 constructor(private Reports: ReportService, private users:UsersService ){}

  ngOnInit(): void {
    this.Reports.getReferal().subscribe(
      (res:any)=> {
        console.log(res.data)
        this.showLoader = false;
        this.referal = res.data
        this.sortReferals()
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
      action: 'Viewed Report Reference'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  sortReferals(){
    if(this.referal){
      console.log('App drivers Exists')
     const newdata = this.referal.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateB - dateA;
      });
      console.log('sorted array',newdata)
    }
    }

    applyFilter() {
      // const filteredAdmins = this.withdraw.filter((item) => {
      //   // Adjust the conditions based on your filtering requirements
      //   return (
      //   item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      //   item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) 
      //   );
      // });
      // // Update the table data with the filtered results
      // // If you are using server-side filtering, you may need to call an API here
      // this.withdraw = filteredAdmins;
    }
    exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.referal);
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
  
}
