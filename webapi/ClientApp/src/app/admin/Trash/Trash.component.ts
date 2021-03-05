import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employees/employees.component';

@Component({
  selector: 'app-Trash',
  templateUrl: './Trash.component.html'
})
export class TrashComponent {
  public employees: Employee[];

  constructor(private http: HttpClient, ) {
    this.getTrash();
  }
  getTrash()
  {
    this.http.get<Employee[]>('./Trash').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));
  }

  recoverEmployee(id) {

    this.http.post('./trash/' + id, {}).subscribe(res => {
      this.getTrash();
    });
  }
}



