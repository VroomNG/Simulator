import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() color = '';


  constructor() { }

  ngOnInit(): void {
  }
  
    get bgColor(){
      return `bg-${this.color}`
    }

}
