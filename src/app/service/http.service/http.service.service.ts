import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  post(url:string,payload:any,token:boolean,httpOptions:any)
  {
    return this.http.post(url, payload, token&&httpOptions)
  }
  put(url:string,payload:any,token:boolean=false,httpOptions:any)
  {
    return this.http.put(url, payload, token&&httpOptions)
  }
  get(url:string,token:boolean=false,httpOptions:any)
  {
    return this.http.get(url,  token&&httpOptions)
  }
  delete(url:string,token:boolean=false,httpOptions:any)
  {
    return this.http.delete(url, token&&httpOptions)
  }
}
