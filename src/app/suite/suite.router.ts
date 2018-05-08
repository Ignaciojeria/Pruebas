import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


//La llamada inicial cargará a este componente del enrutador asociado al modulo app.component
import { SuiteComponent } from './suite.component';

export const ROUTER: Routes= [
    {path:'', redirectTo:'/suite', component:SuiteComponent, pathMatch: 'full' }
] 

//export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);
export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);