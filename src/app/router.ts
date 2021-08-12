import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambioComponent } from './cambio/cambio.component';
import { GraficaComponent } from './grafica/grafica.component';


const routes: Routes = [
    { path: 'inicio', component: GraficaComponent },
    { path: 'prueba', component: CambioComponent },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];


export const app_routing = RouterModule.forRoot(routes);
