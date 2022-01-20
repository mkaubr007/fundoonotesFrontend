import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../http.service/http.service.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }
  CreateNote(reqData: any) {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+ this.token,
      }),
    };
    return this.httpService.post(
      `${environment.baseUrl}/buildNote`,
      reqData,
      true,
      httpOptions
    );
  }

  getAllNoteService() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+this.token,
      }),
    };
    return this.httpService.get(
      `${environment.baseUrl}/grabNotes`,
      true,
      httpOptions
    );
  }

  updateNoteService(reqPayload:any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+this.token,
      }),
    };
    return this.httpService.put(
      `${environment.baseUrl}/grabNotes/reqPayload.id`,
      reqPayload,
      true,
      httpOptions
    );
  }
}
