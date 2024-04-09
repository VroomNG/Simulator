import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { IAdmin } from 'src/app/model/admins';
import { UsersService } from 'src/app/service/users.service';

interface City {
  name: string;
  // code: string;
}
interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {


  inSubmission = false; 

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;

  admins!: IAdmin [] | any;
  adminId!: any;
  userDetails:any
  displayDialog:boolean = false;

  showAlert:boolean = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private router:Router,
    private users: UsersService
    ){

  }
  ngOnInit() { 
    this.displayDialog = true
    this.cities = [
      { name: 'Abia' },
      { name: 'Enugu' },
      { name: 'Bauchi' },
      { name: 'Calabar' },
      { name: 'Uyo' },
      { name: 'Port Harcourt' },
      { name: 'Abuja' },
      { name: 'Lagos'},
  ];
  this.userType = [
    { type: 'Super Admin', code: '4' },
    { type: 'Sub Admin', code: '3' },
    { type: 'Partner', code: '5' },
  ];
  
  this.adminId = this.route.snapshot.paramMap.get('id')
  console.log(this.adminId)
  this.admin.getSingleAdmin(this.adminId).subscribe(
    (res:any)=>{
      console.log(res)
      this.admins = res.data
      console.log(this.admins)
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
      action: 'Viewed Edit Admin'
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


  updateAdmin() {

   this.showAlert = true;

    var editAdminForm = {
      firstname: this.admins.firstname,
      lastname: this.admins.lastname,
      // email: this.admins.email,
      phone_no: this.admins.Phone_no,
      // password: this.admins.password,
      city: this.admins.city,
      user_type: this.admins.user_type,
    }



    console.log(editAdminForm)
    this.admin.updateAdmin(editAdminForm, this.adminId).subscribe({
      next: (res:any) => {
     if(res.code === 200){
      this.alertMsg = 'User Updated',
      this.alertColor = 'success'
     
      setTimeout(() => {
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
        });
      }, 1000);

     } else {
      this.alertMsg = 'Update failed!!, ERROR from Server ',
      this.alertColor = 'danger'
     }
      }
    })
   
  }

  deleteAdmin() {
      window.alert('are you sure?');
      const adminId = this.adminId;
      console.log(adminId)
      // this.displayDialog = true;
  
        this.admin.deleteAdmin(adminId).subscribe((res:any) => {
          console.log(res);
          const response = res.data;

          if(res.code == 200){
            window.alert('successfully deleted')
            this.router.navigate(['/dashboard']);
          } else {
            window.alert('failed to delete user')
          }
        })
    
    }

     closeEdit(){
      // window.alert('close')
      this.displayDialog = !this.displayDialog;
      this.router.navigate(["/users"])
     }

}
