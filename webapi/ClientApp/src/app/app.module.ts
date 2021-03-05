import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AuthService } from './_Services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './_guard/auth';
import { LoginGuard } from './_guard/login';
import { IndexModule } from './index/index.module';
import { AdminModule } from './admin/admin.module';
import { routes } from './app.route';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,    
    AdminModule, 
    IndexModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    JwtModule.forRoot({
     config: {
       tokenGetter: () => {
         return localStorage.getItem('token');
       }
     }
    })
  ],
  providers: [
    AuthService,
    AuthGuard, 
    LoginGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
