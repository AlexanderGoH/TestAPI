import { Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { EditarComponent } from './vistas/editar/editar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'editar', component: EditarComponent},
];
