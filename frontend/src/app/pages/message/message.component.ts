import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { MessageItemComponent } from '../../components/message-item/message-item.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { IMessage } from '../../models/common.model';
import { MessageService } from '../../services/message.service';
import { GetAllMessage, MessageState } from '../../store/MessageState';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CardComponent, SidebarComponent, MessageItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  @Select(MessageState.selectMessages) message$!: Observable<IMessage[]>;

  constructor(private messageService: MessageService, private store: Store) {}

  ngOnInit(): void {
    this.getAllMessages();

    this.message$.subscribe({
      next: (value) => {
        if (!value.length) {
          this.store.dispatch(new GetAllMessage());
        }
        console.log(value);
      },
    });
  }

  getAllMessages() {
    this.messageService.getAllMessages().subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
}
