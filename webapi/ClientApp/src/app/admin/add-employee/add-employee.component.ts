import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employees/employees.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})


export class AddEmployeeComponent {

  public employee: Employee = {
    id: 0,
    name: "",
    designation:"",
    contactNo:"",
    address:""

  };

  id;

  constructor(private http: HttpClient, private authService:AuthService, private router: Router,
    private route: ActivatedRoute) {

    console.log("asdasd");
         
     

    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.getEmployee(this.id);

      }
    })

   
  }
  
  addEmployee() {
    
    this.http.post('./Employees', this.employee).subscribe(res => { 
    this.router.navigate(["/employees"]);

    });
  }

  updateEmployee() {
    this.employee.id = this.id;
    this.http.put('./Employees/', this.employee).subscribe(res => {
    this.router.navigate(["/employees"]);

     });
  }

  getEmployee(id) {

    this.http.get('./Employees/' + id).subscribe((res: Employee) => {
      this.employee.name = res.name;
      this.employee.contactNo = res.contactNo;
      this.employee.id = res.id;
      this.employee.address = res.address;
      this.employee.designation = res.designation;

    });
  }

  saveEmployee()
  {
    if (this.id > 0)
    {
      this.updateEmployee();
    } else {
      this.addEmployee()
    }

  }
}


