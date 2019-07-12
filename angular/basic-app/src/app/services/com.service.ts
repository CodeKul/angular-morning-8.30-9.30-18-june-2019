import { TrasColor } from './color';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  private em: EventEmitter<TrasColor> = new EventEmitter()

  constructor() { }

  transferColor(col: string) {
    this.em.emit({ color: col })
  }

  receiveColor(fn: (col: TrasColor) => void) {
    this.em.subscribe(fn)
  }
}
