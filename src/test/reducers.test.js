import count from '../reducers/reducer_counter';
import todos from '../reducers/reducer_todos';
// import * as types from '../actions';
import { toggleTodo } from '../lib/Helpers';

const initTodos = [
	{ text: "Welcome to Colin's React Todo List!", ID: 1, complete: false},
	{ text: "Click an item to mark it complete or incomplete.", ID: 2, complete: true},
	{ text: "Use the filters to show all items or only the completed or not yet completed items.", ID: 3, complete: false},
	{ text: "Click the red X to delete it...though you could've probably figured that out", ID: 4, complete: false}
]

describe('count reducer', () => {
	it('should return the initial state', () => {
		expect(count(undefined, 0)).toEqual(0)
	})
	it('should add 1 to the total count', () => {
		const action = {
			type: 'INCREMENT',
			payload: 0
		}
		expect(count(0, action)).toEqual(1)
	})
})

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(todos(undefined, {})).toEqual(initTodos)
	})
	it('should add new todo to the list of todos', () => {
		const expectedTodo = {
			text: "Test Todo", 
			ID: 5, 
			complete: false
		}
		const action = {
			type: 'ADD_TODO',
			payload: expectedTodo
		}
		expect(todos([],action)).toEqual([expectedTodo])
	})
	it('should toggle an existing todo', () => {
		const toggledTodo = {
			text: "Test Todo", 
			ID: 5, 
			complete: false
		}
		const expectedTodo = {
			text: "Test Todo", 
			ID: 5, 
			complete: true
		}
		const action = {
			type: 'TOGGLE_TODO',
			payload: toggleTodo(toggledTodo)
		}
		expect(todos([], action)).toEqual([expectedTodo])
	})
	it('should delete a todo', () => {
		const todosList = [{
			text: "Test Todo", 
			ID: 5, 
			complete: false
		}]
		const action = {
			type: 'DELETE_TODO',
			payload: 5
		}
		expect(todos(todosList, action)).toEqual([])
	})
})