import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { todo } = this.props;
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <span>${todo.description}</span>
    `

    return todoElement;
  }
}