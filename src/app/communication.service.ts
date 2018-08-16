import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private emitLoginEvent = new Subject<any>();

  loginEmitted$ = this.emitLoginEvent.asObservable();

  emitLogin(username: string) {
    this.emitLoginEvent.next(username);
  }
}
