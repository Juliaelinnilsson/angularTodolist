import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [
    { title: 'dance', checked: false },
    { title: 'study', checked: false },
    { title: 'eat', checked: false },
  ];

  @Input() todo: Todo = new Todo();

  constructor() {}

  addTodo(value: string) {
    this.todos.push({
      title: value,
      checked: false,
    });
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  sortAZ() {
    this.todos.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortZA() {
    this.todos.sort((b, a) => a.title.localeCompare(b.title));
  }
}
