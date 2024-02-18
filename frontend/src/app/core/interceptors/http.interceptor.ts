import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenService } from './../services/token.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bear ${tokenService.getToken()}`,
      },
    });
  }

  return next(req).pipe(
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
        tokenService.removeToken();
        router.navigate(['']);
      }

      const error = e.error?.message || e.statusText;
      return throwError(() => error);
    })
  );
};
