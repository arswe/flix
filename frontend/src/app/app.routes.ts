import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { MasterComponent } from './layouts/master/master.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { LoginComponent } from './pages/login/login.component';
import { MessageComponent } from './pages/message/message.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', component: LoginComponent, canActivate: [guestGuard] },
      { path: 'register', component: RegisterComponent },
      {
        path: 'message',
        component: MessageComponent,
        canActivate: [authGuard],
      },
      { path: 'compose', component: ComposeComponent },
    ],
  },
];
