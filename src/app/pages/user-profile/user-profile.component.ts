import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';


interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  cities!: City[] | undefined
  userDetails:any;
  userId: | any;
  displayDtls: | any;
  isReadOnly = true;
  isEdit = false;
  showAlert:boolean = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    private UserProfile:UsersService,
    private router: Router,
    private users: UsersService,
    ) { }

  ngOnInit() {
    
    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      // Parse the storedUserDetails JSON string to an object
      this.userDetails = JSON.parse(storedUserDetails);
      console.log('user component:', this.userDetails);
    } else {
      console.log('User details not found in localStorage.');
    }

    // window.alert(this.userDetails.id)

    this.userId = this.userDetails.id
    this.UserProfile.getSingleUser(this.userDetails.id).subscribe(
      (res:any)=>{
        console.log(res + 'single user')
        this.displayDtls = res.data
      }
    )
    
    this.cities = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' },
      { name: 'Port Harcourt' },
      { name: 'Abuja' },
      { name: 'Lagos'},
  ];
  const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    this.addAccessTrail()
    
  }
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed User Profile'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}
  setEdit(){
    this.isEdit = !this.isEdit
    this.isReadOnly = !this.isReadOnly;
  }

  updateProfile(){
    window.alert('update initiated');
    this.showAlert = true;
    var updateUserForm = {
      firstname: this.userDetails.firstname,
      lastname: this.userDetails.lastname,
      email: this.userDetails.email,
      phone_no:  this.userDetails.phone_no,
      city: this.userDetails.city
    }

    console.log(updateUserForm)
    this.UserProfile.updateUser(updateUserForm, this.userId).subscribe({
      next: (res:any) => {
        console.log(res)
     if(res.code === 200){
      window.alert('user updated')
      this.alertMsg = 'User Updated',
      this.alertColor = 'success',
      this.isEdit = !this.isEdit
      this.isReadOnly = !this.isReadOnly;
      setTimeout(() => {
        localStorage.clear()
        this.router.navigate(['/']) 
      }, 1600)
      // location.reload()
     } else {
      this.alertMsg = 'Update failed!!, ERROR from Server ',
      this.alertColor = 'danger',
      window.alert('user not updated')
     }
      }
    })
  }

 
}
