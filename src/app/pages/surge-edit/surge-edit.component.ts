import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SurgeService } from 'src/app/service/surge.service';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surge-edit',
  templateUrl: './surge-edit.component.html',
  styleUrls: ['./surge-edit.component.scss']
})

export class SurgeEditComponent implements OnInit {

  surgeParams: | any;
  isActive = true;

  showAlert = false;
  alertMsg = 'please wait...';
  alertColor = 'primary';
  searchText = '';
  readonly:boolean = true;
  userDetails:any
  
 constructor(
  private Surge: SurgeService,
  private users:UsersService
 ){}

 ngOnInit(){
  this.Surge.getSurgeParams().subscribe(
    (res:any)=>{
      console.log(res);
      this.surgeParams =  res.data[0]
      console.log(res.data)
    }
  )
  const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    this.addAccessTrail()
 }

 hmr = new FormControl('',[Validators.required, Validators.minLength(0)])
 hsvt= new FormControl('',[Validators.required, Validators.minLength(0)])
 
  surgeForm = new FormGroup({
    hmr: this.hmr,
    hsvt: this.hsvt,
  })
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed Edit Charge'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  onSubmit(){
    console.log(this.surgeForm.value);
    this.Surge.updateSurgeParams(this.surgeForm.value).subscribe(
      (res:any)=>{
        if(res.code == 200){
          window.alert('Updated successfully');
          location.reload();
          this.isActive = !this.isActive               
        }else {
          window.alert('An error occured!!')
        }
      }
    )
  }

  enableForm(){
    this.isActive = !this.isActive
  }

}
