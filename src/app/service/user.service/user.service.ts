import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../http.service/http.service.service';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  
  constructor(private httpService: HttpServiceService) {

  }

  Signup(reqData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/register`,
      reqData,
      false,
      httpOptions
    );
  }

  Login(reqData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/login`,
      reqData,
      false,
      httpOptions
    );
  }

  Forget(reqData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/forgotPassword`,
      reqData,
      false,
      httpOptions
    );
  }

  Reset(reqData: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.put(
      `${environment.baseUrl}/reset-Password`,
      reqData,
      false,
      httpOptions
    );
  }


}
