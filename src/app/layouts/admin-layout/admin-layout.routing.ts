import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { AuthClassGuard } from 'src/app/helpers/auth-class.guard';

export const AdminLayoutRoutes: Routes = [
 
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthClassGuard]}, 
    
    
];
