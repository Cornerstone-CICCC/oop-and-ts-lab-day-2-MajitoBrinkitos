export class TodoContext {
    constructor(){
        this.todos = [];
    }

    addTodo(description) {
        const newTodo = {
            id: this.todos.length + 1,
            description: description,
            complete: false
        };
        this.todos.push(newTodo);
        console.log("Todo added to context:", newTodo);
    }

    getTodos(){
        return this.todos;
    }
}