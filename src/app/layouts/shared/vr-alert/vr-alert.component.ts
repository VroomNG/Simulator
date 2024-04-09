import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vr-alert',
  templateUrl: './vr-alert.component.html',
  styleUrls: ['./vr-alert.component.scss']
})
export class VrAlertComponent {
  @Input() color = 'primary';


  constructor() { }

  ngOnInit(): void {
  }
  
get bgColor(){
  return `bg-${this.color}`
}


}
