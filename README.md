# README

Here is the finished app: [https://coolinmc6.github.io/cm-todo-react2/](https://coolinmc6.github.io/cm-todo-react2/).

This Todo App is based on my previous [app](https://coolinmc6.github.io/CM-todo-react/) but it's built with Redux. 


1. Understand what you are trying to ultimately achieve
  - I want a box to enter text for my Todo, a submit button, and somewhere to list them out
2. Build the Component
  - This step required simply building it out.  This is what I have after this step:
  ```js
  import React, { Component } from 'react';

  class TodoList extends Component {
  	render() {
  		return(
  			<div className="todolist-main">
  				<input type="text"/>
  				<button>Add Todo</button>
  				<div className="todolist-list">

  				</div>

  			</div>
  		)
  	}
  }

  export default TodoList;
  ```



    - it isn't shown here but my TodoList component was imported into my App component

3. Decide what you NEED to have saved in state: a single value? an object? an array of objects?
  - In my global state, I NEED an array of objects, each object being a todo item with the text of the todo, 
  an ID, and a complete flag (true/false).  Here is an example:
  `{ text: 'This is my Todo text', ID: 4968172, complete: false }`
  - I also need to grab the text of the input which, for ease, I am going to put into my global state (i.e. Redux).
  This would probably be a prime candidate for NOT being in global state but rather the component's "local" state but
  just so I don't confuse myself and to learn Redux better, it'll be global.

  ```js
  state: {
  	todos: [ { Todo Object #1}, { Todo Object #2}, { Todo Object #3}, { Todo Object #4}, ],
  	text: 'STRING'
  }
  ```

  - Before I continue, I should also discuss my action creators.  For every key press, do I really want to send an action
  to then add the new value of the string through all that and to my global state?  I'm re-thinking how I feel about putting
  my input text into global state...
  - For my todo, when a user clicks 'Add Todo', it needs to grab the text, generate an id, create the todo object, and send that 
  object to the action creator.  That action creator will create an action with the payload (my todo item) with type 'ADD_TODO'
  and that'll get sent to my reducer.  My reducer will then add that item to my array WITHOUT MUTATION.
  - For right now, I'll set up the infrastructure for it to just add the same todo text for every todo and then go from there.


4. Change the Component into a Container
  - As a quick reminder, this is how I changed my component into a container:
  1. Import connect from 'react-redux'					
  	`import { connect } from 'react-redux';`				
  2. Add my mapStateToProps function		

  	```js
  	function mapStateToProps(state) {				
  		return {			
  			books: state.books		
  		}			
  	}
  	```				
  
  3. Export your connected component					
  	`export default connect(mapStateToProps)(BookList)`


5. Write Action Creator
  - Before I write my action creator, I'll write the function that ultimately calls the action creator.  This means I need
  an ID generator.
  - Now I have my todo creator, I need to build my action creator
  - NOTE: from the 30 seconds it took me to write the action creator, I think it's obvious that the "magic" may not be happening
  in the action creator...maybe I'm wrong, maybe that's where it does happen for other apps, but for this one, I am simply returning
  an object.  I don't think that I really have to do anything crazy here.


6. Write the Reducer
  - My reducer must see the "ADD_TODO" type and add it to my array of todos


7. Connect Reducer to rootReducer
  - This part is obviously not very difficult:
  
  ```js
  import { combineReducers } from 'redux';
  import CounterReducer from './reducer_counter';	
  import TodosReducer from './reducer_todos';
  	
  const rootReducer = combineReducers({	
  	count: CounterReducer,
  	todos: TodosReducer
  });	
  	
  export default rootReducer;	
  ```

8. Bind my Action Creator to Container
  - **NOTE:** if I simply put `addTodo(todo)`, the action will be called but it WILL NOT be connected to Redux.  After mapping
  dispatch to props and including it in my export statement, I had to remember to call `this.props.addTodo(todo)` before it started
  working.

- As of right now, I have an app that allows you to add todos and it's connected to redux.  My next steps are to delete todos, 
edit todos, basic styling.
- Take notes on how I did the input and local state...it always trips me up and I simply need to get it into my head how this 
thing works.


## Edit Todos
- How do I edit a todo?  In this case, how do I toggle the complete flag?
  - Find the todo that you need to toggle
    - this isn't too bad.  I don't really need to run this through Redux as I already have my list of todo items, I just need to
    find it
  - Toggle the 'complete' value
    - Again, I don't need to run this through Redux as I'm just flipping the value.  I could do it in the action creator but for
    this example, I won't
  - Update the list of todos WITHOUT MUTATING the array
    - this DOES need to go through Redux. Issue an action with the updated todo.  That todo will need to go through the todos 
    reducer where it will be sliced appropriately...
- This is how it works:
  - A user clicks on the item to toggle, calling the toggleTodoItem function with one argument, the todo's ID
  - in that function, the todo is found (findByID) and toggled (toggleTodo), neither of which requires an action
  - Then, the action creator toggleTodoAction is called and it is sent the updated todo
  - The action creator doesn't do anything besides create the action.  I theoretically could've done everything here (find
  the todo, toggle it) but for ease, I did not.
  - Because I am changing the todos array, the editing functionality MUST live inside the Todos Reducer.  So I simply added
  another case to the switch statement.
  - Inside my case statement, I find the index of the item that I want to replace and essentially create a new array with
  the updated todo and NOT the old one.  This does not mutate the array, which is important.
  - After editing my basic styling, I can now see when an item is "complete" or not

## Next Steps
- be able to delete a todo
- better styling

## Delete Todos
- To delete a todo, I need to change the TodosReducer.  To do that, I'll need to add a switch statement that looks for
'DELETE_TODO'.  It will then remove that todo WITHOUT MUTATING the array and return the updated version that does not 
include that todo.
- My action creator will be called when the user clicks the red X.  OnClick, I will send the ID to my action creator.  That
ID will be placed in an action as the payload, it will get sent to the reducer where the reducer will, using that ID, 
find the todo I need to delete and remove it without mutating the array.
- So that's done...that was pretty easy.  Once you set up the first action, whatever it may be, adding other ones is pretty
easy.

## Deploy to GitHub









