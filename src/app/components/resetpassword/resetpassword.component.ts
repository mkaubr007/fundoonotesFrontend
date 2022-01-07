import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
  }
}
