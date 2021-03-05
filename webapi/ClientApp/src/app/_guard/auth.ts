import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "../_Services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService,
    public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // console.log(next);
    // const roles = next.firstChild.data['roles'] as Array<string>;
    // console.log(roles);

  

    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
