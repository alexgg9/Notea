import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let mockLogin = true;

      let result=false;
      if(!mockLogin){
        if(route.url[0].toString()!='login'){
          this.router.navigate(['/login']);
        }else{
          result=true;
        }
      }else{
        if(route.url[0].toString()=='login'){
          this.router.navigate(['']);
        }else{
          result=true;
        }
      }
      return result;

  }
  
}
