import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //檢查sessionStorage的token有沒有值
  checkSessionStorage(): boolean {
    const token = sessionStorage.getItem('token') || '';
    if(token){
      return true;
    }
    return false;
  }

}
