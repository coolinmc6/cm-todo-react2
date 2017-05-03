import React, { Component } from 'react';
// import Counter from '../containers/Counter';
import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
      <div>
      	<h1>React-Redux Todo App</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
