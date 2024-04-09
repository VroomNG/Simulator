import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

 @Input() color = 'primary';


  constructor() { }

  ngOnInit(): void {
  }
  
get bgColor(){
  return `bg-${this.color}`
}



}
