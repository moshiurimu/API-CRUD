import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_Services/auth.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
