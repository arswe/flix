import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { IMessage } from '../../models/common.model';
import { DateAgoPipe } from '../../pipes/date-ago.pipe';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [
    CardComponent,
    SidebarComponent,
    MessageItemComponent,
    CommonModule,
    DateAgoPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss',
})
export class MessageItemComponent {
  @Input() data!: IMessage;
}
