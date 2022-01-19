import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { GetAllNoteComponent } from './components/get-all-note/get-all-note.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent,
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
  },
  {
    path:'home',component:DashboardComponent,

    children:[
      // {path:'', redirectTo:"/home/notes", pathMatch:'full' },
      {path:'notes', component:GetAllNoteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
