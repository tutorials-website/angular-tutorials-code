import { Directive,ElementRef,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleApp]'
})
export class StyleAppDirective {

  constructor(private el:ElementRef) { }
 @HostBinding('style.color') textColor;
  @HostListener('click') onclick(){
    this.textColor="red";
  }
  
  @HostListener('mouseover') onMouseOver(){
    this.textColor="blue";
  }
  
  @HostListener('mouseout') onMouseOut(){
    this.el.nativeElement.style.color="green";
  }
}
