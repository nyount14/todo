import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.currUser.pipe(
      take(1),
      map((user) => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        // if userdata persists in the browser
        // if so, navigate to tasks
        if(userData){
          this.authService.autoSignIn();
          return true;
        }else{
          return this.router.createUrlTree(['auth']);
        }
        // otherwise, navigate back to auth
      })
    );
  }
}
