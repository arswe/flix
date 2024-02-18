import { IUser } from "../models/auth.model";


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