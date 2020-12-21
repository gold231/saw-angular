import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { ServicesAuthenticationService } from './services-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesContactRouteGuardService implements CanActivate {

  constructor(private authenticationService: ServicesAuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authenticationService.isContactThankYouAccessible()){
      this.router.navigate(['/404']);
      return false;
    }

    return true;
  }
}
