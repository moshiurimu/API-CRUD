import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: User = {
    email:"",
    password:""
  
}
  
  constructor(private authService: AuthService, private router: Router) {
   
  }

  ngOnInit() {
  }

  login(user) {
    var model = {
      email: user.email,
      password: user.password
    }
    console.log(model);
    //console.log(this.model);
    this.authService.register(model).subscribe(data => {
      // this.alertify.success("Login success!");
    }, error => {
      console.log(error);
    }, () => {
        this.router.navigate(['/login']);
    });
  }
}



export interface User
{
  email: string,
  password: string
}
