import { ElementRef } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const directive = new ClickOutsideDirective(new ElementRef<HTMLElement>(
      document.createElement('div')));
    expect(directive).toBeTruthy();
  });
});
