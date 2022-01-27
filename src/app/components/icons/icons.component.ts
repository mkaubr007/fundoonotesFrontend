import { Component,EventEmitter,Inject,Input,OnInit, Output} from '@angular/core';
import { NoteService } from 'src/app/service/note.service/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input()note:any;
  constructor(private noteService:NoteService) {
  }
  @Output() noteOperation = new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.note);
  }

  onDelete() {
    console.log(this.note);
    this.noteService.deleteNoteService(this.note._id).subscribe((result) => {
      console.log(result);
      this.noteOperation.emit(result);
    })
  }
}




