import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/registration'},
  { path: 'registration', component: RegisterScreenComponent },
  { path: 'login', component: LoginScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
