import { ElementRef } from '@angular/core';

export function factorySafeNativeElement(elRef?: ElementRef) {
  if (elRef && elRef.nativeElement) {
    return elRef.nativeElement;
  }
  return factorySafeHTMLElement();
}

export function factorySafeHTMLElement(el?: Element) {
  if (el instanceof HTMLElement) {
    return el;
  }
  const div = document.createElement('div');
  if (el) {
    Object.getOwnPropertyNames(el).forEach(prop => div[prop] = el[prop]);
  }
  return div;
}
