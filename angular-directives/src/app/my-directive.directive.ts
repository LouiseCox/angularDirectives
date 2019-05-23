import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appMyDirective]"
})
export class MyDirectiveDirective {
  constructor(elem: ElementRef) {
    elem.nativeElement.style.background = "orange";
    elem.nativeElement.style.fontstyle = "italic";
  }
}
