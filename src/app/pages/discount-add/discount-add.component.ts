import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, } from '@angular/forms';
import { DiscountService } from 'src/app/service/discount.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-discount-add',
  templateUrl: './discount-add.component.html',
  styleUrls: ['./discount-add.component.scss']
})
export class DiscountAddComponent implements OnInit {
  userDetails:any
  
// variables

showAlert = false;
alertMsg = 'Please wait';
alertColor = 'primary';

// constructor and lifecycle methods
constructor(private discount: DiscountService, private users:UsersService){
   }

ngOnInit(){
  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()
}

 // validators & formcontrols
 discount_code = new FormControl('',[Validators.required, Validators.minLength(1)]);
 title = new FormControl('',[Validators.required, Validators.minLength(3)]);
 description = new FormControl('',[Validators.required, Validators.minLength(3)]);
 start_date = new FormControl('',[Validators.required, Validators.minLength(3)]);
 end_date = new FormControl('',[Validators.required, Validators.minLength(3)]);
 discount_percent = new FormControl('',[Validators.required, Validators.minLength(1)]);
 max_discount_amount = new FormControl('',[Validators.required, Validators.minLength(1)]);
 max_no_of_users = new FormControl('',[Validators.required, Validators.minLength(1)]);
 
 // Grouped Form
 addDiscount = new FormGroup({
   discount_code: this.discount_code,
   title: this.title,
   description: this.description,
   start_date: this.start_date,
   end_date: this.end_date,
   discount_percent: this.discount_percent,
   max_discount_amount: this.max_discount_amount,
   max_no_of_users: this.max_no_of_users
 })

 addAccessTrail(){
  const {email} = this.userDetails
  console.log(email)

  const userCredetials = {
    login: email,
    action: 'Viewed Discount Add'
  }

  this.users.addAccesstrail(userCredetials).subscribe(
    (res:any)=>{
      const {message} = res
      if(message === "Success insering access"){
       } else {}
    }
  )
}

//  functions 
onSubmit(){
  this.showAlert = true
  setTimeout(() => {
    this.showAlert = true
    this.alertMsg = 'Loading... If sync persists check network'
    this.alertColor = 'info'
    const discountData = this.addDiscount.value
    console.log(discountData)
    this.discount.addDiscount(discountData).subscribe(
      (res:any) => {
       console.log(res)
       if(res.code == 200){
        this.alertMsg = 'Discount added';
        this.alertColor = "success"
       } else {
        this.alertMsg = 'something went wrong check connectivity and try again';
        this.alertColor = 'danger'
       }
       } 
    )
    }, 1600)
}

reset(){
  this.addDiscount.reset()
}

}
