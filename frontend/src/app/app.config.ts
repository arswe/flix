import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { httpInterceptor } from './interceptors/http.interceptor';
import { MessageState } from './store/MessageState';
import { UserState } from './store/UserState';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    importProvidersFrom(
      NgxsModule.forRoot([MessageState, UserState]),
      HttpClientModule
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
  ],
};
