import { Routes } from '@angular/router';

import { InicioComponent } from '../../inicio/inicio.component';
import { FaqComponent } from 'app/faq/faq.component';
import { CancelarComponent } from 'app/cancelar/cancelar.component';
import { LoginComponent } from 'app/login/login.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'cancelar', component: CancelarComponent },
    { path: 'login', component: LoginComponent},
];
