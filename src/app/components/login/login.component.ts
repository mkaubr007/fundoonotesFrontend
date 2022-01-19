import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../service/user.service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private user: UserServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    let reqData = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    return this.user.Login(reqData).subscribe(
      (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        localStorage.setItem('token',res.data)
        console.log(res)
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
