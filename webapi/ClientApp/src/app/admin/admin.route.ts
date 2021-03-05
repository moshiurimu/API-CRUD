

import { Route } from '@angular/router';
import { AuthGuard } from '../_guard/auth';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { AdminComponent } from './admin.component';
import { CounterComponent } from './counter/counter.component';
import { EmployeesComponent } from './employees/employees.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './Trash/Trash.component';
import { UserPermissionComponent } from './userPermission/userPermission.component';


export const AdminRoutes: Route[] = [
    {
        path: '',
        component: AdminComponent,
        canActivate : [AuthGuard],
        children: [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent,  data : {roles : ['Admin']}},
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'employees', component: EmployeesComponent, data : {roles : ['Admin']} },
      { path: 'add-employee', component: AddEmployeeComponent,  data : {roles : ['Admin']} },
          { path: 'add-employee/:id', component: AddEmployeeComponent,  data : {roles : ['Admin']} },     
      { path: 'trash', component: TrashComponent,  data : {roles : ['Admin']} },
      { path: 'userPermission', component: UserPermissionComponent ,  data : {roles : ['Admin']}},
        ]
    }
];
