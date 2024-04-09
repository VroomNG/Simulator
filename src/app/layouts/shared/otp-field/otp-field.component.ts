import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-otp-field',
  templateUrl: './otp-field.component.html',
  // styleUrls: ['./otp-field.component.css']
})
export class OtpFieldComponent {
  otpDigits = new Array(5); // Change the number according to your OTP length
  otp: string[] = new Array(this.otpDigits.length).fill('');

  @Output() otpChange = new EventEmitter<string>();

  onInput(event: any, index: number) {
    const value = event.target.value;
    if (value.match(/^[0-9]$/)) {
      this.otp[index] = value;
      this.emitOtp();
      if (value && index < this.otpDigits.length - 1) {
        // Move focus to the next input field
        const nextInput = event.target.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }

  onKeyDown(event: KeyboardEvent, input: HTMLInputElement, index: number) {
    if (event.key === 'Backspace' && index > 0 && !this.otp[index]) {
      // Move focus to the previous input field on Backspace press
      const prevInput = input.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }
  

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasteData = event.clipboardData?.getData('text/plain');
    if (pasteData && pasteData.match(/^\d{1,5}$/)) {
      this.otp = pasteData.split('');
      this.emitOtp();
    }
  }

  emitOtp() {
    const otpValue = this.otp.join('');
    this.otpChange.emit(otpValue);
  }
}
