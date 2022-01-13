import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../service/user.service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private user: UserServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log( this.forgetForm.value)
    this.submitted = true;
    let reqData = {
      email: this.forgetForm.value.email,
    };
     return this.user.Forget(reqData).subscribe(
      (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        this.router.navigate(['/resetpassword']);
      },
      (error) => {
        this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom',
          horizontalPosition: 'left' })
      }
    );
  }
}
