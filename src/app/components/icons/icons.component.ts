import { Component,Inject,Input,OnInit} from '@angular/core';
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

  ngOnInit(): void {
    console.log(this.note);
  }

  onDelete() {
    console.log(this.note);
    this.noteService.deleteNoteService(this.note._id).subscribe((result) => {
      console.log(result);
    })
    window.location.reload();
  }
}




