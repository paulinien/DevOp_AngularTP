import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: "a[telDirective]"
})

export class TelDirective implements AfterViewInit {

  @Input('telDirective')
  tel!: string

  constructor(private el: ElementRef<HTMLAnchorElement>) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.href = "tel:"+this.tel
  }
}

