import { Component , Input, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';
import { ISchedules,  } from 'src/app/model/notifications';
import { NotificationService } from 'src/app/service/notifications.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() searchText: string = ''
   view_schedule: ISchedules [] = [];
   userDetails:any

   showLoader = true;
   constructor(private Notify: NotificationService, private users:UsersService){}

   ngOnInit(): void {
     this.Notify.getSchedules().subscribe(
      (res:any) =>{
       console.log(res.data);
       this.view_schedule = res.data
       this.showLoader = false;
       this.sortSchedule()
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
      action: 'Viewed Notifications'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )
  }
   sortSchedule(){
    if(this.view_schedule){
      console.log('App drivers Exists')
     const newdata = this.view_schedule.sort((a, b) => {
        const dateA = new Date(a.sendDate).getTime();
        const dateB = new Date(b.sendDate).getTime();
        return dateB - dateA;
      });
      console.log('sorted array',newdata)
    }
    }

    exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.view_schedule);
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
