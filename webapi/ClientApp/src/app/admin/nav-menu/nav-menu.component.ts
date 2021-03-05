import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../_Services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  role :string;
  isloggedIn;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  constructor(private authService: AuthService, private router: Router) {
    
    this.getAllData();

  }


  getAllData(){
    this.role = this.authService.currentUserRole();
    this.isloggedIn = this.authService.loggedIn();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
