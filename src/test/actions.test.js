import * as actions from '../actions';

describe('Actions', () => {
	it('should create an action to add a todo', () => {
		const text = 'Complete tests for app';
		const expectedAction = {
			type: 'ADD_TODO',
			payload: text
		};
		expect(actions.addTodo(text)).toEqual(expectedAction);
	});
	it('should create an action to toggle a todo', () => {
		const todo = {
			text: 'This is a test todo',
			ID: 123,
			complete: false
		}
		const expectedAction = {
			type: 'TOGGLE_TODO',
			payload: todo
		};
		expect(actions.toggleTodoAction(todo)).toEqual(expectedAction);
	});
	it('should create an action to delete a todo', () => {
		const todo = {
			text: 'This is a test todo',
			ID: 1234,
			complete: true
		}
		const expectedAction = {
			type: 'DELETE_TODO',
			payload: todo.ID
		};
		expect(actions.deleteTodo(todo.ID)).toEqual(expectedAction);
	});
})