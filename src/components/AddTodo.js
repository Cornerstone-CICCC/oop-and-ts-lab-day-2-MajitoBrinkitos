import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js";

export class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo: ""
    };

    //Bind methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleInputChange(event){
    console.log("Input changed:", event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  }

  handleAddTodo(){
    console.log("Add button clicked");
    const {TodoContext} = this.props;
    TodoContext.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });

    console.log("Todo added:", this.state.newTodo);

    document.querySelector('#wrapper-todos').innerHTML = '';
    const todos = new TodoList({
      TodoContext: TodoContext
    }).render();
    document.querySelector('#wrapped-todos').appendChild(todos);
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement.querySelector('#todo-input').addEventListener('input', this.handleInputChange);

    addElement.querySelector('#todo-add-btn').addEventListener('click', this.handleAddTodo);


    return addElement;
  }
}