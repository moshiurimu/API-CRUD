import { Routes } from '@angular/router';
import { AdminRoutes } from './admin/admin.route';
import { IndexRoutes } from './index/index.route';


export const routes: Routes = [...AdminRoutes, ...IndexRoutes];