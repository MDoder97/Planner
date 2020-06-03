import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material/material.module';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent
   ],
   imports: [
      CommonModule,
      CoreModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      MaterialModule,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {

}
