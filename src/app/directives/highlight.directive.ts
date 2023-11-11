import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  appHighlight!:any;

  constructor(private el: ElementRef) { 
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.setCardStyles('3px solid green', '5px');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setCardStyles('0.5px solid gray', '5px');
  }
  
  private setCardStyles(borderStyle: string, borderRadius: string) {
    this.el.nativeElement.style.border = borderStyle;
    let el = this.el.nativeElement as HTMLElement;
    if (el.children.length > 0) {
      (el.children[0] as HTMLElement).style.border = borderStyle;
      (el.children[0] as HTMLElement).style.borderRadius = borderRadius;
    }
  }
  
}

