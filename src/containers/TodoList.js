import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateID, findByID, toggleTodo } from '../lib/Helpers';

import { addTodo, toggleTodoAction, deleteTodo } from '../actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			term: ''
		}

		this.onInputChange = this.onInputChange.bind(this)
		this.toggleTodoItem = this.toggleTodoItem.bind(this)
	}
	onInputChange(e) {
		const term = e.target.value
		this.setState({ term })
		
	}
	createTodoItem() {
		const ID = generateID();
		const newTodo = {
			text: this.state.term,
			ID: ID,
			complete: false
		}
		this.props.addTodo(newTodo);
		this.setState({ term: ''})
	}
	toggleTodoItem(id) {
		const todoItemToToggle = findByID(id,this.props.todos);

		const updatedTodo = toggleTodo(todoItemToToggle);
		
		this.props.toggleTodoAction(updatedTodo);

	}
	render() {
		return(
			<div className="todolist-main">
				<input type="text" onChange={this.onInputChange} value={this.state.term} name="addTodo"/>
				<button onClick={() => this.createTodoItem()} className="add-btn">Add Todo</button>
				<div className="todolist-list">
					{this.props.todos.map((todo) => {
						return (
							<div key={todo.ID} className="todo-holder">
								<div className={`todo-item ${todo.complete ? 'complete' : ''}`} 
								onClick={() => this.toggleTodoItem(todo.ID)}>
									{todo.text}
								</div>
								<a className="delete-item" onClick={() => this.props.deleteTodo(todo.ID)}
									data-id={todo.ID} key={todo.ID}
									>X</a>

							</div>
						);
					})}
				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addTodo, toggleTodoAction, deleteTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);