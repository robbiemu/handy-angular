import {
  Directive, Output, ElementRef,
  EventEmitter, HostListener
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})

/**
 * Click outside directive - detect outside clicks
 */
export class ClickOutsideDirective {
  constructor(private _elementRef: ElementRef) { }

  @Output() appClickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onClick(targetElement: ElementRef) {
    const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.appClickOutside.emit(null);
    }
  }
}
