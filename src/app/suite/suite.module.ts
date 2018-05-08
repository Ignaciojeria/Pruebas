import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiteComponent } from './suite.component';
import { ROUTES } from './suite.router';
@NgModule({
  imports: [
    CommonModule,
    ROUTES
  ],
  declarations: [SuiteComponent]
})
export class SuiteModule { }
