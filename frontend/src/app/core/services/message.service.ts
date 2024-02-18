import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../constants/constants';
import { IMessage } from '../models/common.model';
import { IApiResponse } from './../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getAllMessage(): Observable<IApiResponse<IMessage[]>> {
    return this.http.get<IApiResponse<IMessage[]>>(`${apiEndpoint}`);
  }
}
