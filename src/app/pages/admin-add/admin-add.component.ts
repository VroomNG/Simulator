import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { EmailTaken } from '../../helpers/validators/email-taken';
import { AdminService } from 'src/app/service/admin.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

interface City {
  name: string;
  // code: string;
}
interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})

export class AdminAddComponent implements OnInit {

  inSubmission = false; 

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;
  userDetails:any

  displayDialog:boolean = false;
  
  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    private users: UsersService,
     private Admin: AdminService,
     private router: Router
    ){ }

  onSubmit(){
    if(this.adminForm.valid) {
     window.alert('admin added')
    }
  }
  ngOnInit(){
    this.displayDialog = true;
    this.userType = [
      { type: 'Super Admin', code: '4' },
      { type: 'Sub Admin', code: '3' },
      { type: 'Partner', code: '5' },
  ];
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
  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()
  }

  firstname = new FormControl('',[Validators.required, Validators.minLength(3)])
  lastname = new FormControl('',[Validators.required, Validators.minLength(3)])
  email = new FormControl('',
  [Validators.required,Validators.email], 
  // [this.emailTaken.validate]
  )
  phone_no = new FormControl('+234', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(15)
  ]) 
  password = new FormControl('',[Validators.required, Validators.pattern(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  city = new FormControl(this.cities, [Validators.required, Validators.minLength(3)]) 
  user_type = new FormControl(this.userType, [Validators.required, Validators.minLength(1)]) 
  
  adminForm = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone_no: this.phone_no,
    password: this.password,
    city: this.city,
    user_type: this.user_type,
  })

  // const selectedValue = this.form.get('selectedOption').value;
  addAccessTrail(){

   
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed Add Admin'
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
  submit(){
     console.log(this.adminForm.value)
    //  window.alert('in process') 
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      this.Admin.addAdmin(this.adminForm.value).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = res.message;
          this.alertColor = "success"
         } else {
          this.alertMsg = res.message;
          this.alertColor = 'danger'
         }
         }
        
      )
      }, 1600)
  }

  reset(){
    this.adminForm.reset()
  }
  close(){
    // window.alert('close')
    this.displayDialog = !this.displayDialog;
    setTimeout(() => {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/users', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
    }, 500);
    this.router.navigate(["/users"])
   }

  
}
