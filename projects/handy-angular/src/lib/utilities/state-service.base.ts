import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export abstract class StateService<T> {
  private state = new Subject<T>();
  state$: Observable<T>;

  constructor() {
    this.state$ = this.state.asObservable();
  }
}

export function emitPropertyChange(property: string) {
  return function (this: any) {
    this.state.next({ [property]: this[property] });
  };
}
