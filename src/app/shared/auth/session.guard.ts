import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userData = JSON.parse(localStorage.getItem('userData'))
    //if data persists in the browser, navigate to tasks
    if(userData){
      return this.router.createUrlTree(['tasks'])
    }else{
      return true;
    }
    //otherwise, stay on auth

      return true;
  }

}
