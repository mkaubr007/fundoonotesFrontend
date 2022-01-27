import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NoteService} from 'src/app/service/note.service/note.service'
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any
  description: any
  noteId: any
  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private noteService:NoteService
  ) {
    this.title = data.title,
    this.description = data.description
    this.noteId = data._id
  }

  ngOnInit(): void {
    console.log(this.noteId);
  }
  onClose(){
    let reqPayload = {
      title: this.title,
      description: this.description,
    }
    console.log('updated', reqPayload);
    this.noteService.updateNoteService(reqPayload,this.noteId).subscribe((result)=>{
      console.log(result);
    })
    window.location.reload();
    this.dialogRef.close();
  }
}
