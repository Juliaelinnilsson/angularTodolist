import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-print-todo',
  templateUrl: './print-todo.component.html',
  styleUrls: ['./print-todo.component.scss'],
})
export class PrintTodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter<Todo>();

  constructor() {}

  deleteItem() {
    this.remove.emit(this.todo);
  }

  clickEvent() {
    this.todo.checked = !this.todo.checked;
  }

  ngOnInit(): void {}
}
