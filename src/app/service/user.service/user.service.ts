import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../http.service/http.service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService ) {

   }

  Signup(reqData:any){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
      return this.httpService.post(`${environment.baseUrl}user/userSignUp`,reqData,false,httpOptions)
    }

}
