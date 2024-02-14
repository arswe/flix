import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private toastrService: ToastrService) {}
  openToast() {
    this.toastrService.success('working');
  }
}
