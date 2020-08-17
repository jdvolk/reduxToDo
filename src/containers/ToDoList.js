import React from 'react';
import Todo from './ToDo'
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => {

  const displayTodos = todos.map(todo => {
    return (
      <Todo
        {...todo}
        key={todo.id}
      />
    )
  })
  
  if(todos.length) {

    return (
      <ul>
        {displayTodos}
      </ul>
    )
  } else {
    return (
      <div><br/>You dont have any ToDos</div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);
