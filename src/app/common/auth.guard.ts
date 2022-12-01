import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private rooter: Router){}
  canActivate():boolean{    
    if (this.authService.checkSessionStorage()){
       return true;
    }
  //無法通過驗證的請求轉到loginComponent
      this.rooter.navigate(['login']);

      return false;
  }
  
}
