import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { RegisterValidators } from '../../helpers/validators/register-validators'
// import { EmailTaken } from '../../helpers/validators/email-taken';
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
interface Icon {
  icon: string;
  code: string;
}

@Component({
  selector: 'app-admin-addquest',
  templateUrl: './admin-addquest.component.html',
  styleUrls: ['./admin-addquest.component.scss']
})

export class AdminAddQuestComponent implements OnInit {

  inSubmission = false; 
  data = [
    {
      "title": "Embark on an adventurous journey to explore the urban wonders around you.",
      "list": [
        {
          "icon": "bullet",
          "content": "Discover and visit five unique landmarks in the city."
        },
        {
          "icon": "bullet",
          "content": "Capture a photo at each landmark to document your exploration."
        }
      ]
    },
    {
      "title": "Reward Showcase",
      "list": [
        {
          "icon": "https://image-url.com/star.jpg",
          "title": "Explorer Badge",
          "content": "Discover and visit five unique landmarks in the city."
        }
      ]
    }
  ];

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;
  iconType!: Icon[] |  undefined;
  userDetails:any
  
  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    private users: UsersService,
    private Admin: AdminService,
    private fb: FormBuilder
    ){ }

 
  ngOnInit(){
    this.userType = [
      { type: 'Badge', code: '1' },
      { type: 'Coin', code: '2' },
  ];
 
    this.iconType = [
      { icon: 'Bullet', code: '1' },
      { icon: 'Icon', code: '2' },
  ];
 
  console.log('init');

  }

  title = new FormControl('',[Validators.required, Validators.minLength(3)])
  subTitle = new FormControl('',[Validators.required, Validators.minLength(3)])
  // description  = new FormArray([],[Validators.required, Validators.minLength(3)])
  icon = new FormControl(<any>[Validators.required, Validators.minLength(3)]);
  type = new FormControl('',[Validators.required, Validators.minLength(3)])
  points = new FormControl('',[Validators.required, Validators.minLength(1)])
  target = new FormControl('',[Validators.required, Validators.minLength(1)])
  starts = new FormControl('',[Validators.required, Validators.minLength(3)])
  expires = new FormControl('',[Validators.required, Validators.minLength(3)])
  content = new FormControl('',[Validators.required, Validators.minLength(3)])
  title_ = new FormControl('',[Validators.required, Validators.minLength(3)])

  descForm = new FormGroup({
      description: this.fb.array([]),
  })

  credentials = {
    title:'',
    list:  [
      {

      }
    ]
  }

  questForm = new FormGroup({
    title: this.title,
      subTitle: this.subTitle,
      description: this.fb.array([]),
      icon: this.icon,
      type: this.type,
      points: this.points,
      target: this.target,
      starts: this.starts,
      expires: this.expires
  })

  get description(){
    return this.descForm.controls["description"] as FormArray
  }

  addDesc(){
    const descriptionForm = this.fb.group({
      title: "",
      // level: ['beginner', Validators.required]
      list: [
        {
          icon: "bullet",
          content: " "
        },
      ]
    })

    this.description.push(descriptionForm);
  }

  delete(questIndex:number){
      this.description.removeAt(questIndex);
  }

  submit(){
    console.log(this.descForm.value)
  }

 

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.icon.setValue(file);
  }

  
}
