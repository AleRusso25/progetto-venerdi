import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { iUser } from '../../interfaces/i-user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent implements OnInit {
  todoCompleted: iUser[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.getUsersWithTodo(this.todoSvc.todos);
    this.todoCompleted = this.userSvc.users
      .map((user) => ({
        ...user,
        todos: user.todos?.filter((todo) => todo.completed) || [],
      }))
      .filter((user) => user.todos.length > 0);
    console.log(this.todoCompleted);
  }
}
