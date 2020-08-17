import React, { Component } from 'react';
import AddTodoForm from '../containers/AddTodoForm';
import VisibleToDoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <VisibleToDoList />
        <Footer />
      </div>
    );
  }
}

export default App;
