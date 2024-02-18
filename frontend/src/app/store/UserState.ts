import { Injectable } from '@angular/core';
import { State, StateContext } from '@ngxs/store';
import { IUser } from '../models/auth.model';
import { UserService } from '../services/user.service';

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

  getLoggedInUser(ctx: StateContext<UserStateModel>) {}
}
