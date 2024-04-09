import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IDiscount } from 'src/app/model/discountInfo';
import { DiscountService } from 'src/app/service/discount.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
 @Input() searchText:string = ''

 discount: IDiscount [] = [];
 showLoader = true;
 userDetails:any

 constructor(private Discount: DiscountService, private users:UsersService){}
 ngOnInit(): void {
   this.Discount.getDiscounts().subscribe(
    (res:any)=>{
      console.log(res.data)
      this.discount = res.data;
      this.showLoader = false
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
    action: 'Viewed Discount'
  }

  this.users.addAccesstrail(userCredetials).subscribe(
    (res:any)=>{
      const {message} = res
      if(message === "Success insering access"){
       } else {}
    }
  )
}

exportExcel() {
  import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.discount);
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
