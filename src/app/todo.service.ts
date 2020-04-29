import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  fetchTodos() {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }

  addTodo(payload: Todo) {
    return this.http.post<Todo>('http://localhost:3000/todos', payload);
  }

  updateTodo(payload: Todo, id: number) {
    return this.http.put<Todo>(`http://localhost:3000/todos/${id}`, payload);
  }
}
