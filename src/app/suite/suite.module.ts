import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiteComponent } from './suite.component';
import { ROUTES } from './suite.router';
import {InicioComponent} from './inicio/inicio.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [SuiteComponent,
    InicioComponent
    ],
  imports: [
    CommonModule,
    ROUTES,
    MatSidenavModule,
    MatCardModule
  ]/*,
bootstrap: [SuiteComponent]*/
})
export class SuiteModule { }
