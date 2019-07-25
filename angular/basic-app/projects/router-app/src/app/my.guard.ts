import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, states: RouterStateSnapshot): boolean | UrlTree {
    return false
  }
}
