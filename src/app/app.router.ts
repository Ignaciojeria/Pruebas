import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import{AppComponent} from './app.component';
//La llamada inicial cargará el componente login del enrutador asociado al modulo app.component
import { LoginComponent } from './login/login.component';

export const ROUTER: Routes= [
//login es una de las rutas del enrutador del componente appComponent
// y este se visualiza en <router-outlet></router-outlet>
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'login', component:LoginComponent},
//El modulo de suite tiene su propio enrutamiento.
{path:'suite', loadChildren: './suite/suite.module#SuiteModule'},
]

//export const ROUTES:ModuleWithProviders=RouterModule.forChild(ROUTER);
export const ROUTES:ModuleWithProviders=RouterModule.forRoot(ROUTER);