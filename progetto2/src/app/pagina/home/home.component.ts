import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TodoService } from '../../service/todo.service';
import { iUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  allTodo: iUser[] = [];
  // searchForm2: string = '';
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.getUsersWithTodo(this.todoSvc.todos);
    this.allTodo = this.userSvc.users.map((todo) => ({
      ...todo,
      users: todo,
    }));

    console.log(this.allTodo);
  }

  //searchTodo() {
  //    this.allTodo = this.userSvc.users.filter((todo) =>
  //     user.todo.toLowerCase().includes(this.searchForm2.toLocaleLowerCase())
  // );
  // }
}
