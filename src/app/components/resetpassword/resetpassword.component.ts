import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from '../../service/user.service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private user: UserServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      code: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    let reqData = {
      email: this.resetForm.value.email,
      password: this.resetForm.value.password,
      code: this.resetForm.value.code,
    };
    return this.user.Reset(reqData).subscribe(
      (res: any) => {
        this.snackBar.open(`${res.message}`, '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        this.snackBar.open(`${error.error.message}`, '', {duration: 3000 ,verticalPosition: 'bottom',
          horizontalPosition: 'left' })
      }
    );
  }
}
