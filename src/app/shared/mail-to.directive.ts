import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";


@Directive({
  selector: "a[mailToDirective]"
})

export class MailToDirective implements AfterViewInit {

  @Input('mailToDirective')
  mail!: string

  constructor(private el: ElementRef<HTMLAnchorElement>) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.href = "mailto:"+this.mail
  }
}
