import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../environments/environment";
import { map, catchError, } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

  baseUrl = "./";
  decodedToken: any;
  role:Observable<string>
  constructor(private http: HttpClient) { }

  login(model: any) {
    const helper = new JwtHelperService();
    return this.http.post(this.baseUrl + 'auth/login', model)
      .pipe(map((response: any) => {
        if (response) {
          this.decodedToken = helper.decodeToken(response.token);
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('permissions', response.permissions);
          
        }
      }))
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'auth/register', model);
  }

  getAllUser() {
    return this.http.get(this.baseUrl + 'auth/all');
  }

  currentUserRole(){
    const helper = new JwtHelperService();
    var token = localStorage.getItem('token'); 

    if(!token) return "";

    var decodedToken = helper.decodeToken(token);
    var role = decodedToken.role;
    return role;
  }

  loggedIn(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
  }


}
