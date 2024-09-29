import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    RouterLink,
    HeaderComponent,
    UsersListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isShowSadMan = true;
  newPages = newPages;
}
