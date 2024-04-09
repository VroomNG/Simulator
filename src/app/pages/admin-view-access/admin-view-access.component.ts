import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IAccessTrail } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-view-access',
  templateUrl: './admin-view-access.component.html',
  styleUrls: ['./admin-view-access.component.scss']
})
export class AdminViewAccessComponent implements OnInit {
  admin_access_trail!: any[];
  searchText:  string = '' 
  originalData = this.admin_access_trail;

  // loaderColor!: 'primary';
   showLoader = true;

  constructor(private Admin: AdminService ) {

  }

  ngOnInit(): void {
    this.Admin.getAccessTrail().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.admin_access_trail = res.data;
        this.showLoader = false
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.admin_access_trail.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.login.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.action.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.admin_access_trail = filteredAdmins;
  }

  searchItems(items: any[], searchText: string, searchProperties: string[]): void {
    const filteredItems = items.filter((item) => {
      return searchProperties.some((prop) => {
        return item[prop] && item[prop].toString().toLowerCase().includes(searchText.toLowerCase());
      });
    });

    this.admin_access_trail = filteredItems;
  }
  clear() {
    this.searchText = '';
    
    this.Admin.getAccessTrail().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.admin_access_trail = res.data;
        this.showLoader = false
      }
    )
    this.admin_access_trail = this.originalData;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.admin_access_trail);
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
