import { Directive ,ElementRef,AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appEmpdirective]'
})
export class EmpdirectiveDirective implements AfterViewInit{

  constructor(private eleRef:ElementRef) { }

  ngAfterViewInit(): void {
    this.eleRef.nativeElement.style.color="green";
  }

}
