import { makeAutoObservable } from 'mobx';

class Todo {
    text = '';
    completed = false;
    deleted = false;

    constructor(text) {
        this.text = text;
        makeAutoObservable(this);
    }

    markAsCompleted() {
        this.completed = true;
    }

    markAsDeleted() {
        this.deleted = true;
    }
}

export default Todo;
