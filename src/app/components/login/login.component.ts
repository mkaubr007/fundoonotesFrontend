import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {UserServiceService} from '../../service/user.service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted = false;
  errorMessage: string | undefined;
  constructor(private fb:FormBuilder,private user:UserServiceService) { }

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
    }
    return this.user.Login(reqData).subscribe((res: any) => {
      console.log(res);
    },err =>{
      console.log(err.message);
    })
  }
}
