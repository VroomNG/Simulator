import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string = 'Cancel';
  @Input() bgColor: string = '';
  @Input() borderColor: string = '';
  @Input() textColor: string = '';
  @Input() buttonState: any;


  constructor() { }

  ngOnInit(): void {
  }
  
// get bgColor(){
//   return `bg-${this.color}`
// }



}
