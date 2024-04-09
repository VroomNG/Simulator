import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'trustThisUrl'
})
export class TrustUrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): SafeResourceUrl{
    
   return this.sanitizer.bypassSecurityTrustResourceUrl(value);

  }

}