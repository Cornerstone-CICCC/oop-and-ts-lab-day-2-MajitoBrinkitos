import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js";

export class AddTodo extends Component {
  constructor(props){
    super(props);
    this.newTodo = "";

    //bind methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleInputChange (event) {
    console.log("Input changed:", event.target.value);
    this.newTodo = event.target.value;
  }

  handleAddTodo () {
    console.log("Add button clicked");
    const { TodoContext } = this.props;
    const newTodoDescription = this.newTodo;

    console.log("Todo to be added:", newTodoDescription);

    if(newTodoDescription.trim() !== ""){
      TodoContext.addTodo(newTodoDescription);
      this.newTodo = "";

      console.log("Todo added to context:", newTodoDescription);

      document.querySelector('#wrapper-todos').innerHTML = '';
      const todos = new TodoList({
        TodoContext: TodoContext
        }).render();
      document.querySelector('#wrapper-todos').appendChild(todos);
      } else {
        console.log("Todo description is empty, not adding to context.");
      }
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement.querySelector('#todo-input').addEventListener('input', this.handleInputChange);

    addElement.querySelector('#todo-add-btn').addEventListener('click', this.handleAddTodo);

    console.log("Render method called, input value:", this.newTodo);

    return addElement;
  }
}