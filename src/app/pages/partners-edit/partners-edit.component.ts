import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerService } from 'src/app/service/partners.service';
import { UsersService } from 'src/app/service/users.service';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-partners-edit',
  templateUrl: './partners-edit.component.html',
  styleUrls: ['./partners-edit.component.scss']
})
export class PartnersEditComponent implements OnInit {

  partners!: any;
  partnerId: any;
  userDetails:any;
  cities!: City[] |  undefined;
  showAlert:boolean = false;
  alertMsg = 'Updating user ...';
  alertColor = 'primary';
  displayDialog:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private Partner: PartnerService,
    private router:Router,
    private users:UsersService,

    ){

  }
  ngOnInit() { 

  this.displayDialog = true;
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

  this.partnerId = this.route.snapshot.paramMap.get('id')
  console.log(this.partnerId)
  this.Partner.getSinglePartners(this.partnerId).subscribe(
    (res:any)=>{
      console.log(res)
      this.partners = res.data
      console.log(this.partners)
    }
  )
}

addAccessTrail(){
  const {email} = this.userDetails
  console.log(email)

  const userCredetials = {
    login: email,
    action: 'Viewed Edit Partners'
  }

  this.users.addAccesstrail(userCredetials).subscribe(
    (res:any)=>{
      const {message} = res
      if(message === "Success insering access"){
       } else {}
    }
  )}


update() {
  this.showAlert = true;
  var editPartnerForm = {
    firstname: this.partners.firstname,
    lastname: this.partners.lastname,
    email: this.partners.email,
    phone_no: this.partners.Phone_no,
    password: this.partners.password,
    city: this.partners.city,
    user_type: this.partners.user_type,
  }

  console.log(editPartnerForm)
  this.Partner.updatePartner(editPartnerForm, this.partnerId).subscribe({
    next: (res:any) => {
      console.log(res)
      if(res.code === 200){
      this.alertMsg = 'Updated Admin',
      this.alertColor = 'success'
      window.location.reload();
    }else {
      this.alertMsg = 'Update failed!! ERROR WITH SERVER',
      this.alertColor = 'danger'
    }
    }
  })
 
}

deletePartner() {
    window.alert('are you sure?');
    const partnerId = this.partnerId;
    // console.log(adminId)
    // this.displayDialog = true;

      this.Partner.deletePartner(partnerId).subscribe((res:any) => {
        console.log(res);

        const response = res.data;
        if(res.code == 200){
          window.alert('successfully deleted')
          this.router.navigate(['/']);
        } else {
          window.alert('failed to delete user')
        }

      })
  
  }

  close(){
    this.displayDialog = !this.displayDialog
    this.router.navigate(['users/'])
  }

}
