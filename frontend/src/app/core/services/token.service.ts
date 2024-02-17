import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  setToken(token: string) {
    localStorage.setItem(constants.CURRENT_TOKEN, token);
  }

  removeToken() {
    localStorage.removeItem(constants.CURRENT_TOKEN);
    this.updateToken(false);
  }
}
