import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { commonData } from '../model/commonData.model';

import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private url = 'http://localhost:8004';
  constructor(private http: HttpClient) { }

  /**
   * 發Post 請求
   * 處理登入
   * @param account 
   * @param password 
   * @returns 
   */
  postRq(account: string, password: string, webUrl: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json'
    });
    let options = {
      headers
    };
    let params = {
      'account': account,
      'password': password
    };

    return this.http.post<commonData>(this.url + webUrl, params, options);
  }

  /**
   * 發Get 請求
   * 查詢資料
   * @param token 
   * @param webUrl 
   * @returns 
   */
  getRq(token: string, webUrl: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'responseType': 'json',
      'Authorization':'Bearer ' + token
    });
      return this.http.get<commonData>(this.url + webUrl, {headers:headers});
  }

}
