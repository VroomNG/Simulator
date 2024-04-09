// Dependecies
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IAdmin, IQuest } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';
import { UsersService } from 'src/app/service/users.service';
import * as FileSaver from 'file-saver';


// Decorator and file connector
@Component({
  selector: 'app-admin-view-quest',
  templateUrl: './admin-view-quest.component.html',
  styleUrls: ['./admin-view-quest.component.scss'],
  providers: [DatePipe],
})

export class AdminViewQuestComponent implements OnInit {
  @Input() searchText: string = '';

 showNoResults:boolean = false;
 moreActions:boolean = false;

  quest: IQuest[] = [];
  questDtls: IAdmin | any;
  displayDialog: boolean = false;
  showLoader = true;
  originalData = this.quest;
  
  editedRowId: number | null = null;
  // date!: DatePipe;

  userDetails:any
  selectedUserId:any = null;

  //  lifecycle and constructor
  constructor(
    private Admins: AdminService,
    private users: UsersService,
    private datePipe: DatePipe,
    // private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.Admins.getQuest().subscribe(
    (res:any)=> {
      console.log(res)
      this.quest = res.data.currentQuests
      this.showLoader = false;
    }
    )

  const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    // console.log('view admin', email)
    this.addAccessTrail()
  }
 
  // functions
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed admins'
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
    const filteredAdmins = this.quest.filter((admin) => {
      // Adjust the conditions based on your filtering requirements
      // return (
      //   // admin.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      //   // (admin.lastname && admin.lastname.toLowerCase().includes(this.searchText.toLowerCase())) ||
      //   // admin.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      //   // (admin.phone_no && admin.phone_no.toLowerCase().includes(this.searchText.toLowerCase())) ||
      //   // admin.user_type.toString().includes(this.searchText)
      // );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.quest = filteredAdmins;
  }

  clear() {
    this.searchText = '';
    this.Admins.getQuest().subscribe(
      (res:any)=> {
        this.quest = res.data
        this.showLoader = false;
      }
      )
      this.quest = this.originalData
  }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.quest);
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

    viewQuest(quest: IQuest):any {
      this.questDtls = { ...quest }; // Create a copy to avoid modifying the original data; 
      this.editedRowId = quest.id  ;
      this.displayDialog = true;
    }

    toggleDialog(){
        this.displayDialog = false
    }


  userAction(userId: any) {
    if (this.selectedUserId === userId) {
        this.selectedUserId = null; // Hide the card actions if the same user is clicked again
    } else {
        this.selectedUserId = userId; // Show the card actions for the clicked user
    }
}
}
