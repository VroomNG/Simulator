
import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vr-input',
  templateUrl: './vr-input.component.html',
  styleUrls: ['./vr-input.component.scss']
})
export class VRInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl()
  @Input() type = ''
  @Input() placeholder = '';
  @Input() format = ''
  @Input() value = ''
  
    
  constructor() { }

  ngOnInit(): void {
  }
}

