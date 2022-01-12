import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {
    path:'signup',component:SignupComponent
  },{
    path:'login',component:LoginComponent
  },{
    path: 'forgetpassword', component:ForgetpasswordComponent
  },{
    path: 'resetpassword', component:ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
