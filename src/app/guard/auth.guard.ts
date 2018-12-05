import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router){}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(!await this.authService.isloggedin()){
        this.router.navigate(['/login']);
        return false;
      }
      else{
        return true;
      }
    }
}
