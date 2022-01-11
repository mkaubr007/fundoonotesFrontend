import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm!:FormGroup
  submitted = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      username: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
  }
}
