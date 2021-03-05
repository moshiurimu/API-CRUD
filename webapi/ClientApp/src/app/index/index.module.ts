import { IndexNavmenuComponent } from './IndexNavmenu/IndexNavmenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
  ],
  declarations: [IndexComponent, LoginComponent, RegisterComponent, IndexNavmenuComponent]
})
export class IndexModule { }
