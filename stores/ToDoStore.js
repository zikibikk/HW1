import { makeAutoObservable } from 'mobx';
import Todo from '../components/ToDo';

class TodosStore {
    todos = [];
    completedTodos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text) {
        const todo = new Todo(text);
        this.todos.push(todo);
    }

    markAsCompleted(todo) {
        todo.markAsCompleted();
        this.completedTodos.push(todo);
        this.todos = this.todos.filter((t) => t !== todo); 
    }

    deleteTodo(todo) {
        todo.markAsDeleted();
        this.todos = this.todos.filter((t) => t !== todo); 
    }
}

const todosStore = new TodosStore();
export default todosStore;
