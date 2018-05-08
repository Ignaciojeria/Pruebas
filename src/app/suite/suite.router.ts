import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
//Componente principal del modulo!
import { SuiteComponent } from './suite.component';

//Componentes secundarios
import { InicioComponent } from './inicio/inicio.component';

export const ROUTER: Routes= [
    {path:'', redirectTo:'/suite/inicio', component:SuiteComponent, pathMatch: 'full' },
    {path:'', component:SuiteComponent,
    children: [ {path:'inicio', component: InicioComponent}
]}
]

//export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);
export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);