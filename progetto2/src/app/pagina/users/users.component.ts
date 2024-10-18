import { Component, OnInit } from '@angular/core';
import { iUser } from './../../interfaces/i-user';
import { UserService } from './../../service/user.service';
import { TodoService } from './../../service/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  usersTodo: iUser[] = [];
  searchForm: string = '';
  //mostra todo correlati a user

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.getUsersWithTodo(this.todoSvc.todos);
    this.usersTodo = this.userSvc.users;
    console.log(this.usersTodo);
  }
  searchUser() {
    this.usersTodo = this.userSvc.users.filter((user) =>
      user.firstName.toLowerCase().includes(this.searchForm.toLocaleLowerCase())
    );
  }
}
