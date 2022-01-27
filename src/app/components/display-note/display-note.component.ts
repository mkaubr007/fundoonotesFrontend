import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  title:any
  description:any
  @Input() notesArray:any;

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {

  }
  openDialog(param: any) {
    console.log(param)
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: "600px",
      data: param
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }
}
