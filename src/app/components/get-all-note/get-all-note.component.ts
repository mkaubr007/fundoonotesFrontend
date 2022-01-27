import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service/note.service';
@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  noteList = [];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.noteService.getAllNoteService().subscribe((result: any) => {
      console.log(result);
      console.log(result.data);

      this.noteList = result.data;
      this.noteList.reverse();
    }, error => {
      console.log(error);
    }
    )
  }
  noteData(value: any) {
    console.log(value);
    this.getAllNotes();
  }

  updatedData(value: any) {
    console.log('updated', value);
    this.getAllNotes();
  }
}
