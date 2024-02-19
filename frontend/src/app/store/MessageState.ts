import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
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
  defaults: { messages: [] },
})
@Injectable()
export class MessageState {
  constructor(private messageService: MessageService) {}

  @Action(GetAllMessage)
  getAllMessage(ctx: StateContext<MessageStateModel>) {
    return this.messageService.getAllMessages().pipe(
      tap((response) => {
        const state = ctx.getState();
        ctx.setState({ ...state, messages: response.data });
      })
    );
  }

  @Selector([MessageState])
  static selectMessages(state: MessageStateModel): IMessage[] | undefined {
    return state.messages;
  }
}
