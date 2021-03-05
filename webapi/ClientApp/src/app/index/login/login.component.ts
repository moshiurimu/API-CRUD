import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
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
    this.authService.login(model).subscribe(data => {
      // this.alertify.success("Login success!");
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigate(['']);
    });
  }
}



export interface User
{
  email: string,
  password: string
}
