import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.currUser.pipe(
      take(1),
      exhaustMap((user) => {
        console.log("start of interceptor")
        // Make sure we have a user
        if (!user) return next.handle(req);
        console.log("Intercept request")
        // Modify the reqest to attach the access token
        const modifiedReq = req.clone({
          setHeaders: {
            Authorization: "Bearer " + user.token
          }
        });

        // Return the modified request
        return next.handle(modifiedReq);
      })
    );
  }
}
