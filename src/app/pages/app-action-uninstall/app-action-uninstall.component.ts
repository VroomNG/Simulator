import { Component, Input, OnInit } from '@angular/core';
import { ActionService } from 'src/app/service/action.service';
import { IUninstall } from 'src/app/model/actions';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-app-action-uninstall',
  templateUrl: './app-action-uninstall.component.html',
  styleUrls: ['./app-action-uninstall.component.scss']
})
export class AppActionUninstallComponent implements OnInit {

  @Input() searchText:string = ''

  uninstalls: IUninstall [] = [];
  userDetails:any
  showLoader = true;


  constructor(private AppActions: ActionService, private users: UsersService, ){}

  ngOnInit(): void {
    this.AppActions.getAppUninstalls().subscribe(
      (res:any)=> {
        console.log(res.data);
        this.uninstalls = res.data;
        this.showLoader = false;
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
      action: 'Viewed Uninstall'
    }

    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )
  }

}
