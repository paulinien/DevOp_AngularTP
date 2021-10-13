import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'phoneNumberFormat'
})

export class PhoneNumberFormatPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value.split(".").join(" ")
  }
}
