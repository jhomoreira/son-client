import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent} from './users.component';
import { MzButtonModule } from 'ngx-materialize';
import { UsersCreateComponent } from './users-create/users-create.component';
import { FormsModule } from '@angular/forms';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

import { PasswordComponent } from './components/password.component';
import { ProfileComponent } from './components/profile.component';
import { LoginComponent } from './components/login.component';

import { LaravelModule } from '../laravel/laravel.module';

import { AuthService } from './services/auth.service';

import { CookieService } from "ngx-cookie-service";

const appRoutes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/create', component: UsersCreateComponent},
  {path: 'users/:id', component: UsersShowComponent},
  {path: 'users/:id/edit', component: UsersEditComponent },
  {path: 'password', component: PasswordComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    UsersComponent,
    UsersCreateComponent,
    UsersShowComponent,
    ProfileComponent,
    LoginComponent,
    PasswordComponent,
    UsersEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MzButtonModule,
    LaravelModule,
  ],
  providers: [
    AuthService,
    CookieService,
  ]
})
export class UsersModule { }
