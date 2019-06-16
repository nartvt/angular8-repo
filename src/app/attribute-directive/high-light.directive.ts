import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
  constructor(private ele: ElementRef,private render2:Renderer2) { }
  ngOnInit(): void {
    // this.ele.nativeElement.style.backgroundColor="pink";
    this.render2.setStyle(this.ele.nativeElement,"background-color","grey");
  }

  @HostBinding('style.backgroundColor') bgColor: string = "red";
  @HostListener('mouseenter') hoverMouse(eventData: Event) {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "pink");
}
  @HostListener('mouseleave') leaveMouse(eventData: Event) {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "grey");
  }
}
