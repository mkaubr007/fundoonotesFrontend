import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  title:any
  description:any
  @Input() notesArray:any;
  @Output() noteUpdated = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      panelClass: 'dialog-container-custom',
      width: "600px",
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.noteUpdated.emit(result);
    });
  }
}
