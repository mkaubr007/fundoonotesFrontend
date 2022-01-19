import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/service/note.service/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  panelOpenState = false;
  title:any
  description:any

  constructor(private notesService: NoteService) { }

  ngOnInit(): void {
  }

  onClose() {
    if (this.title != null && this.description != null) {
      console.log("inside onClose")
      let reqData = {
        title: this.title,
        description: this.description
      }
      this.title='',
      this.description=''
      console.log(reqData);

      this.notesService.CreateNote(reqData).subscribe((response:any)=>{
        console.log(response);
      })
    }
  }
}
