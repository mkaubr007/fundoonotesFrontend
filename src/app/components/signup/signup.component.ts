import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserServiceService} from '../../service/user.service/user.service';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  hide = true;


  constructor(private fb: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',  Validators.required],
      password: ['',  Validators.required],
      confirm: ['', Validators.required],
      service:'advanced'
    });

  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.value.password != this.signupForm.value.confirm) {
      return alert("password didn't match");
    }
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      let reqData = {
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        service: this.signupForm.value.service,
      }
      return this.user.Signup(reqData).subscribe((res: any) => {
        console.log(res);
      },err =>{
        console.log(err.message);
      })
    }
  }
}
