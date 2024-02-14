import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MessageItemComponent } from '../../components/message-item/message-item.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CardComponent, SidebarComponent, MessageItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {}
