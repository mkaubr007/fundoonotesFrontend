
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  imageSignUp='./assets/fundooAccount.png'
  submitted = false;
  hide = true;

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
  }

}
