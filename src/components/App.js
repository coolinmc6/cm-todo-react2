import React, { Component } from 'react';
// import Counter from '../containers/Counter';
import TodoList from '../containers/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        Hello from the App!!
        
        <TodoList />
      </div>
    );
  }
}

export default App;
