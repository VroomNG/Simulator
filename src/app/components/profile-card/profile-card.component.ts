import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  
  constructor(
    private router:Router
  ){}
  ngOnInit() {}

  logout(){
    window.alert('are you sure')
     localStorage.clear()
     this.router.navigate(['/login']) 
 }


} 

