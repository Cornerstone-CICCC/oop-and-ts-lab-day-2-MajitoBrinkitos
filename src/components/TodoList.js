import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props.TodoContext;
    console.log("Todos in TodoList:", todos);
    
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list";

    todos.forEach(todo => {
      const todoItem = new TodoItem({ todo }).render();
      todoListElement.appendChild(todoItem);
    });
    
    return todoListElement;
  }
}