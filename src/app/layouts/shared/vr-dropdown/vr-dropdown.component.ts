import { Component, Input , Output, EventEmitter, } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-vr-dropdown',
  templateUrl: './vr-dropdown.component.html',
  styleUrls: ['./vr-dropdown.component.scss']
})
export class VrDropdownComponent {
  @Input() options: any[] = [];
  @Input() control!: FormControlName;
  @Input() ngModel: any;
  @Input() formControl!: any;
  @Output() selectedOptionChange = new EventEmitter<any>();

  onOptionSelect(option: any): void {
    this.selectedOptionChange.emit(option);
    this.control.value(option)
  }

}
