import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  state = { todos: [{ task: 'Get the dog', id: uuidv4() }] };

  renderTodoList = () => {
    return this.state.todos.map(todo => (
      <Todo key={todo.id} id={todo.id} task={todo.task} />
    ));
  };

  render() {
    return <div>{this.renderTodoList()}</div>;
  }
}

export default TodoList;
