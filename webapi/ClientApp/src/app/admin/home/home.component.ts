
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
 
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {
    
    if(!this.authService.loggedIn())
      this.router.navigate(["/login"]);
  }
}

