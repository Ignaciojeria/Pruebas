import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Servicios
import {LoginService} from './service/login.service';

//Componentes
import { LoginComponent } from './login/login.component'

//Enrutador
import { ROUTES } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTES

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
