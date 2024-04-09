import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SurgeService } from 'src/app/service/surge.service';
import { UsersService } from 'src/app/service/users.service';

interface City {
  name: string
}

interface Option {
  name: string,
  charge: number
}

@Component({
  selector: 'app-surge-add',
  templateUrl: './surge-add.component.html',
  styleUrls: ['./surge-add.component.scss']
})
export class SurgeAddComponent implements OnInit {

  inSubmission = false; 

  cities!: City[] |  undefined;
  options!: Option[] |  undefined;
  userDetails:any
  // userType!: Users[] |  undefined;

  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
     private users:UsersService,
     private AppSurge: SurgeService
    ){ }

  ngOnInit(){
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
  this.options = [
    {name:'Amount', charge: 1},
    {name:'Multiplier', charge:2},
  ]
  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  this.addAccessTrail()
 
  }

  // generated_run_date = new FormControl('',[Validators.required, Validators.minLength(0)] ) 
  charge = new FormControl('',[Validators.required, Validators.minLength(0)]); 
  surgeSelected = new FormControl(1,[Validators.required, Validators.minLength(0)]);
  fromDate = new FormControl(null,[Validators.required, Validators.minLength(0)]);
  utcToDateTime = new FormControl(null,[Validators.required, Validators.minLength(0)]);
  startTime = new FormControl('',[Validators.required, Validators.minLength(0)]);
  endTime = new FormControl('',[Validators.required, Validators.minLength(0)]);
  utcStartDateTime = new FormControl(null,[Validators.required, Validators.minLength(0)]);
  chargeOption = new FormControl(null,[Validators.required, Validators.minLength(0)]);
  city = new FormControl('',[Validators.required, Validators.minLength(0)]);
  ratio = new FormControl('',[Validators.required, Validators.minLength(0)]);
  latitude = new FormControl('6.5244',[Validators.required, Validators.minLength(0)]);
  longitude = new FormControl('3.3792',[Validators.required, Validators.minLength(0)]); 

  surgeForm = new FormGroup({
  // generated_run_date: this.generated_run_date ,
  // parent_activity_id: this.parent_activity_id, 
  // team_id: this.team_id,
  // activity:  this.activity,
  // frequency: this.frequency,
  // run_date:  this.run_date,
  // time_zone: this.time_zone,
  // start_time: this.start_time, 
  // late_after:  this.late_after,
  // escalate_after: this.escalate_after,
  // activity_notes: this.activity_notes,
  // success_email_subject: this.success_email_subject,
  // failure_email_subject: this.failure_email_subject,
  // status: this.status,
  // status_note: this.status_note,
  // do_not_overwrite: this.do_not_overwrite,
  // changed_by: this.changed_by,
  // detail: this.detail,
  // area: this.area,
  // no_alarm: this.no_alarm 
  charge: this.charge,
  surgeSelected: this.surgeSelected,
  fromDate: this.fromDate,
  utcToDateTime: this.utcToDateTime,
  startTime: this.startTime,
  endTime: this.endTime,
  utcStartDateTime: this.utcStartDateTime,
  chargeOption: this.chargeOption,
  city: this.city,
  ratio: this.ratio,
  latitude: this.latitude,
  longitude: this.longitude
  })

  
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed Add Surge'
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
  this.AppSurge.addSurge(this.surgeForm.value).subscribe(
    (res:any) => {
     console.log(res)
     if(res.code == 200){
      window.alert('Success ')
      // this.alertMsg = 'Email sent for verification, please verify your email';
      this.alertColor = "success"
     } else {
      window.alert('Failed')
     }
    }
  )
 }

}
