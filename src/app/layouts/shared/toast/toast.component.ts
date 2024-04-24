import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

 @Input() color = 'primary';
 @Input() type: 'success' | 'failed' | 'regular' | 'toast' = 'success';
 @Input() message: string = '';
  // @Input() bgColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
get bgColor(){
  return `bg-${this.color}`
}



}
