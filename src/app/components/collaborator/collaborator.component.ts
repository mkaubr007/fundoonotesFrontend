import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/service/note.service/note.service.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  params:any
  CollaboratorForm!: FormGroup;
  Userdetails:any
  collaborators:any=[];

  constructor(private dialogRef: MatDialogRef<CollaboratorComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.CollaboratorForm = new FormGroup({
      email: new FormControl('',[Validators.required,])
    });
  }
  close() {
    this.dialogRef.close();
}
addCollaborator()
{
  this.Userdetails= JSON.parse(localStorage.getItem('userDetails')!);
  this.params = {
    NoteId:this.data.noteId,
    SenderEmailId:this.Userdetails.email,
    CollaboratorEmailId:this.CollaboratorForm.value.email
  }
}
}
