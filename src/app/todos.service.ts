import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todos-list/todo-interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodo(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      )
    );
  }
  createTodo(todo: Todo) {
    const existingTodo = this.todosSubject$.value.find(
      (currentElement) => currentElement.title === todo.title
    );
    if (existingTodo) {
      alert('ТАКАЯ ЗАДАЧА УЖЕ СУЩЕСТВУЕТ');
    } else {
      this.todosSubject$.next([...this.todosSubject$.value, todo]);
      alert('НОВАЯ ЗАДАЧА УСПЕШНО ДОБАВЛЕНА');
    }
  }
  deleteTodo(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => item.id !== id)
    );
  }
}
