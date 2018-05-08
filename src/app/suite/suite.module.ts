import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiteComponent } from './suite.component';
import { ROUTES } from './suite.router';
import {InicioComponent} from './inicio/inicio.component';
@NgModule({
  imports: [
    CommonModule,
    ROUTES
  ],
  declarations: [SuiteComponent,
                InicioComponent]
})
export class SuiteModule { }
