import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
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
  selector: 'app-admin-quest-dtls',
  templateUrl: './admin-quest-dtls.component.html',
  styleUrls: ['./admin-quest-dtls.component.scss']
})
export class AdminQuestDetailsComponent implements OnInit {


  inSubmission = false; 
  isReadOnly = true

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;

  quest!: any;
  questLocation!:any
  questId!: any;
  userDetails:any

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
  //   this.cities = [
  //     { name: 'Abia' },
  //     { name: 'Enugu' },
  //     { name: 'Bauchi' },
  //     { name: 'Calabar' },
  //     { name: 'Uyo' },
  //     { name: 'Port Harcourt' },
  //     { name: 'Abuja' },
  //     { name: 'Lagos'},
  // ];
  // this.userType = [
  //   { type: 'Super Admin', code: '4' },
  //   { type: 'Sub Admin', code: '3' },
  //   { type: 'Partner', code: '5' },
  // ];
  
this.questId = this.route.snapshot.paramMap.get('id')
  console.log(this.questId)
  this.admin.getSingleQuest(this.questId).subscribe(
    (res:any)=>{
      console.log(res)
      this.quest = res.data.quest
      const loc = this.questLocation = res.data.location
      console.log('locations',loc )
      console.log('data', res.data.quest)
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
      action: 'Viewed Quest Details'
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

    // var editAdminForm = {
    //   firstname: this.admins.firstname,
    //   lastname: this.admins.lastname,
    //   // email: this.admins.email,
    //   phone_no: this.admins.Phone_no,
    //   // password: this.admins.password,
    //   city: this.admins.city,
    //   user_type: this.admins.user_type,
    // }

    // console.log(editAdminForm)
    // this.admin.updateAdmin(editAdminForm, this.adminId).subscribe({
    //   next: (res:any) => {
    //  if(res.code === 200){
    //   this.alertMsg = 'User Updated',
    //   this.alertColor = 'success'
    //  } else {
    //   this.alertMsg = 'Update failed!!, ERROR from Server ',
    //   this.alertColor = 'danger'
    //  }
    //   }
    // })
   
  }

  deleteQuest() {
      window.alert('are you sure?');
      const questId = this.questId;
      console.log(questId)
      // this.displayDialog = true;
  
        this.admin.deleteQuest(questId).subscribe((res:any) => {
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

  enableEdit(){
    this.isReadOnly = !this.isReadOnly;
  }

}
