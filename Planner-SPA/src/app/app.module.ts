import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
   declarations: [
      AppComponent,
      ProjectCreationComponent,
      RegisterScreenComponent,
      LoginScreenComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
