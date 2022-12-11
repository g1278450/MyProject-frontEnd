import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../service/http.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /** 
   * 放變數
   */
  account = new FormControl('', [Validators.required, Validators.maxLength(10)]) //驗證字數須大於10個字
  password = new FormControl('', [Validators.required, Validators.minLength(3)]) //驗證字數須不少於3個字
  token: any;

  constructor(private httpService: HttpService,private router: Router,) { }

  ngOnInit(): void {

  }

  doLogin() {
    this.httpService.postRq(this.account.value, this.password.value, '/user/login').subscribe({
      next:(response)=>{
        const data = new Map(Object.entries(response.data));

        if(data.get('token')){
          this.token = JSON.stringify(data.get('token'));
          this.token = this.token.replace('"', '');
          //儲存在html5提供的localStorage
          sessionStorage.setItem('token', this.token);
          // 轉導到首頁
          // this.router.navigate(['index']);
          // 轉導到查詢頁
          this.router.navigate(['stock']);
        }
      },
      error:(e) =>{
          this.router.navigate(['error']);
      }
      });
  }

}
