import { AuthService } from './../_Services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeesComponent } from './employees/employees.component';
import { TrashComponent } from './Trash/Trash.component';
import { UserPermissionComponent } from './userPermission/userPermission.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
  ],
  declarations: [AdminComponent, 
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeesComponent,
    TrashComponent,
    UserPermissionComponent,
    AddEmployeeComponent], 

    providers: [AuthService]
})
export class AdminModule { }
