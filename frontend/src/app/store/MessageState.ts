import { Injectable } from '@angular/core';
import { Action, State } from '@ngxs/store';
import { IMessage } from '../models/common.model';
import { MessageService } from '../services/message.service';

export class GetAllMessage {
  static readonly type = '[Message] Get All';
}

export interface MessageStateModel {
  messages: IMessage[] | undefined;
}

@State<MessageStateModel>({
  name: 'Message',
  defaults: {
    messages: [],
  },
})
@Injectable()
export class MessageState {
  constructor(private messageService: MessageService) {
    @Action()
  }
}
