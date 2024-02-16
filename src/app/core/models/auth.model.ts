export interface IUser {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginRespose {
  message: string;
  token: string;
  user: IUser;
}
