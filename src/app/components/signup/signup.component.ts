import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user.service/user.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private user: UserServiceService,
    private router: Router,
    private snackBar:MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log("on signup")
    this.submitted = true;
    if (this.signupForm.value.password != this.signupForm.value.confirm) {
       alert("password didn't match");
    }
    if (this.signupForm.valid) {
      // console.log(this.signupForm.value);
      let reqData = {
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      };
       this.user.Signup(reqData).subscribe(
        (res: any) => {
          this.snackBar.open(`${res.message}`, '', {duration: 3000 ,verticalPosition: 'bottom',
          horizontalPosition: 'left' })
          this.router.navigate(['/login']);
        },
        (error) => {
          this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom',
          horizontalPosition: 'left' })
        }
      );
    }
  }
}
