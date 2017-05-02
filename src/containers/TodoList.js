import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateID } from '../lib/Helpers';

import { addTodo } from '../actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			term: ''
		}

		this.onInputChange = this.onInputChange.bind(this)
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
	render() {
		return(
			<div className="todolist-main">
				<input type="text" onChange={this.onInputChange} value={this.state.term}/>
				<button onClick={() => this.createTodoItem()}>Add Todo</button>
				<div className="todolist-list">
					{this.props.todos.map((todo) => {
						return (
							<div key={todo.ID}>{todo.text}</div>
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
	return bindActionCreators({ addTodo: addTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);