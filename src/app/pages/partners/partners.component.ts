import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IPartners } from 'src/app/model/partners';
import { PartnerService } from 'src/app/service/partners.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners: IPartners[] = [];
  showLoader = true;
  searchText:string = ''
  userDetails:any
  displayDialog:boolean = false;
  loaderColor!: 'primary';
  editedUser: IPartners | any;
  showNoResults:boolean = false;
  selectedUserId:any = null;
  editedRowId: number | null = null;

  constructor(private Partners: PartnerService, private users: UsersService ) {}

  ngOnInit(): void {
    this.Partners.getPartners().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.partners = res.data;
        this.showLoader = false;
      }
    )
    const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    // console.log('view admin', email)
    this.addAccessTrail()
  
  }
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed Partners'
    }

    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        // console.log(res)
        const {message} = res
        if(message === "Success insering access"){
        //  console.log('access trail added')
         } else {
        // console.log('not added')
         }
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.partners.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.partners = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.partners);
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
    this.Partners.getPartners().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.partners = res.data;
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
