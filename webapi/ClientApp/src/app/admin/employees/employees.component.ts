import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';
import { IUserPermission } from '../userPermission/userPermission.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent {
  public employees: Employee[];
  public permissions: IUserPermission[] = [];

  constructor(private http: HttpClient, private authService:AuthService, private router: Router) {
    
    if(!this.authService.loggedIn())
      this.router.navigate(["/login"]);

    //var permissionsString = localStorage.getItem('permissions');
    //this.permissions = permissionsString.split(',');
    
    http.get<Employee[]>('./Employees').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));

   this.getPermission();
  }

  getPermission() {
    this.http.get<IUserPermission[]>('./UserPermissions').subscribe((result: IUserPermission[]) => {
      this.permissions = result;
    }, error => console.error(error));
  }

  deleteEmployee(item: Employee) {
    if (!confirm(`Are you sure want to delete ${item.name} ?`)) { return; }
    const index = this.employees.indexOf(item);
    this.employees.splice(index, 1);

    this.http.delete('./Employees/' + item.id).subscribe(res => {

    }, error => this.employees.splice(index, 0, item));
  
 }
}

export interface Employee {
  id: number;
  name: string;  
  designation: string;
  contactNo: string;
  address: string;
}
