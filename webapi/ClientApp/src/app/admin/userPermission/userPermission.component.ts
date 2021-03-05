import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-userPermission',
  templateUrl: './userPermission.component.html'
})
export class UserPermissionComponent {
  public permissions: IUserPermission[] = [];

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    this.getPermission();

    if(!this.authService.loggedIn())
   
      this.router.navigate(["/login"]);    
     }
     
  getPermission() {
    this.http.get<IUserPermission[]>('./UserPermissions').subscribe((result:IUserPermission[]) => {
      this.permissions = result;
    }, error => console.error(error));
  }

  permissionChange(permission:IUserPermission) { 
    const permissionData = this.permissions.find(x=>x.id === permission.id); 
    if (permissionData != null) {
      permissionData.status = !permissionData.status;


      const index = this.permissions.indexOf(permission);
      this.permissions[index] = permissionData;
    }

    console.log(this.permissions);

  }

  savePermissions(permissions: IUserPermission[]) {

    this.http.post<IUserPermission[]>('./UserPermissions', permissions).subscribe(result => {
      this.getPermission();
    }, error => console.error(error));
  }
}


export interface IUserPermission {
  view: string;
  status: boolean;
  order: number;
  id: number;
  isDelete: boolean;
}

