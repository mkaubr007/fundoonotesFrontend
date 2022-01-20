import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/note.service/note.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any
  description: any
  noteId: any
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteService) {
    // console.log(data);
    this.title = data.title,
    this.description = data.message
    this.noteId = data.id
  }
  @Output() noteUpdated = new EventEmitter<any>();

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  onClose() {
    let reqPayload = {
      title: this.title,
      description: this.description,
      id: this.noteId
    }
    console.log('updated', reqPayload);

    this.noteService.updateNoteService(reqPayload).subscribe((result) => {
      console.log(result);
      this.noteUpdated.emit(result);
    })

    this.dialogRef.close();
  }
}

