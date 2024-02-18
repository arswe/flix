import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { IUser } from '../models/auth.model';

export class GetAllUser {
  static readonly type = '[User] Get All';
}

export class GetLoggedInUser {
  static readonly type = '[User] Get Logged In User';
}

export interface UserStateModel {
  users: IUser[] | undefined;
  user: IUser | null;
}

@State<UserStateModel>({
  name: 'User',
  defaults: {
    users: [],
    user: null,
  },
})
@Injectable()
export class UserState {
  constructor(private userService: UserService) {}
}
