import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhoneNumberFormatPipe} from "./animalPhoneNumber.pipe";
import {MailToDirective} from "./mail-to.directive";
import {TelDirective} from "./tel.directive";



@NgModule({
  declarations: [
    PhoneNumberFormatPipe,
    MailToDirective,
    TelDirective
  ],
  exports: [
    PhoneNumberFormatPipe,
    MailToDirective,
    TelDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
