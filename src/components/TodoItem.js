import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js"

export class TodoItem extends Component {
  constructor(props){
    super(props);
  }

  handleMarkComplete() {
    const { todo, TodoContext } = this.props;
    TodoContext.markComplete(todo.id);

    document.querySelector('#wrapper-todos').innerHTML = '';
    const todos = new TodoList ({ TodoContext }).render();
    document.querySelector('#wrapper-todos').appendChild(todos);
  }

  handleDeleteTodo(){
    const { todo, TodoContext } = this.props;
    TodoContext.deleteTodo(todo.id);

    document.querySelector('#wrapper-todos').innerHTML = '';
    const todos = new TodoList ({ TodoContext}).render();
    document.querySelector('#wrapper-todos').appendChild(todos);
  }

  render() {
    const { todo } = this.props;
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <span style="text-decoration: ${todo.completed ? 'line-through' : 'none'};">${todo.description}</span>
      <button class="mark-complete">Complete</button>
      <button class="delete-todo">Delete</button>
    `;

    todoElement.querySelector('.mark-complete').addEventListener('click', () => this.handleMarkComplete());

    todoElement.querySelector('.delete-todo').addEventListener('click', () => this.handleDeleteTodo());

    return todoElement;
  }
}