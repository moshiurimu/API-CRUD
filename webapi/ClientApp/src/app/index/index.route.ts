

import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../_guard/login';
import { RegisterComponent } from './register/register.component';

export const IndexRoutes: Route[] = [
    { path: '', component: IndexComponent },
    {   
        path: '',
        component: IndexComponent,
        canActivate : [LoginGuard],
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ]
    }
];
