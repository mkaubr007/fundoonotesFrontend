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
      `${environment.baseUrl}/note`,
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
      `${environment.baseUrl}/note`,
      true,
      httpOptions
    );
  }

  updateNoteService(reqPayload:any,noteId:any) {
    console.log(this.token)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+this.token,
      }),
    };
    return this.httpService.put(
      `${environment.baseUrl}/note/${noteId}`,
      reqPayload,
      true,
      httpOptions
    );
  }

  deleteNoteService(noteId:any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+this.token,
      }),
    };
    return this.httpService.delete(
      `${environment.baseUrl}/note/${noteId}`,
      true,
      httpOptions
    );
  }
}
