import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../constants/constants';
import { IUser } from '../models/auth.model';
import { IApiResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loggedInUser(): Observable<IApiResponse<IUser>> {
    return this.http.get<IApiResponse<IUser>>(`${apiEndpoint.AuthEndpoint.me}`);
  }

  getAllUsers(): Observable<IApiResponse<IUser[]>> {
    return this.http.get<IApiResponse<IUser[]>>(`${apiEndpoint.UserEndpoint}`);
  }
}
