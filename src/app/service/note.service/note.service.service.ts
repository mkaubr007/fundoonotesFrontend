import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http.service/http.service.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  userDetails = JSON.parse(localStorage.getItem('userDetails')!);

  headers = {
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  };

  constructor(private httpService: HttpServiceService) {}
  CreateNote(data: any) {
    data.UserId = this.userDetails.userId;
    return this.httpService.post(
      `${environment.baseUrl}/buildNote`,
      data,
      true,
      this.headers
    );
  }
  getNote(data:any){
    data.UserId=this.userDetails.userId;
    return this.httpService.get(
      `${environment.baseUrl}/grabNotes`,
      data,
      true,
      this.headers
    );
  }
}
