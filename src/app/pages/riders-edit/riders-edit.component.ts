import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiderService } from 'src/app/service/riders.service';
import { UsersService } from 'src/app/service/users.service';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-riders-edit',
  templateUrl: './riders-edit.component.html',
  styleUrls: ['./riders-edit.component.scss']
})
export class RidersEditComponent implements OnInit {

  riderId: any;
  riders: [] | any;
  userDetails:any

  cities!: City[] |  undefined;

  showAlert:boolean = false;
  alertMsg = 'Updating user ...';
  alertColor = 'primary';
  displayDialog: boolean = false;

  constructor(
    private Rider: RiderService,
    private route: ActivatedRoute,
    private router: Router,
    private users:UsersService
    ){}

  ngOnInit(){ 
    this.displayDialog = true
   this.riderId = this.route.snapshot.paramMap.get('id');
   console.log(this.riderId)
   this.Rider.getSingleRider(this.riderId).subscribe(
     (res:any)=>{
       console.log(res)
       this.riders = res.data
       console.log(this.riders)
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
      action: 'Viewed Edit Riders'
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
    var editRiderForm = {
      firstname: this.riders.firstname,
      lastname: this.riders.lastname,
      // email: this.riders.email,
      phone_no: this.riders.Phone_no,
      // password: this.riders.password,
      city: this.riders.city,
      // user_type: this.riders.user_type,
    }
  
    console.log(editRiderForm)
    this.Rider.updateRider(editRiderForm, this.riderId).subscribe({
      next: (res:any) => {
        console.log(res)
        if(res.code === 200){
        this.alertMsg = 'User Updated'
        this.alertColor = 'success'
      }else {
        this.alertMsg = res.message
        this.alertColor = 'danger'
      }
      }
    })
   
  }
  
  deleteRider() {
      this.showAlert === true;
      window.alert('are you sure?')
      const riderId = this.riderId;
        this.Rider.deleteRider(riderId).subscribe((res:any) => {
          // console.log(res);
          const response = res.data;
          if(res.code == 200){
            window.alert('successfully deleted')
           this.alertMsg = 'Successfully deleted'
           this.alertColor = 'success'
           this.router.navigate(["/users"])
          } else {
            window.alert('failed to delete')
            this.alertMsg = res.message
           this.alertColor = 'danger'
          }
  
        })
    
    }
  
    close(){
  
      this.displayDialog = !this.displayDialog;
      this.router.navigate(["/users"])
     }
    

}
