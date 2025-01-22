export class TodoContext {
    constructor(){
        this.todos = [];
    }

    //addTodo
    addTodo(description) {
        const newTodo = {
            id: this.todos.length + 1,
            description: description,
            complete: false
        };
        this.todos.push(newTodo);
        console.log("Todo added to context:", newTodo);
    }

    //markComplete
    markComplete(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        });
    }

    //deleteTodo
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    getTodos(){
        return this.todos;
    }
}