export function addCount(count) {
	return {
		type: 'INCREMENT', 
		payload: count
	}
}

export function addTodo(todo) {
	// console.log('Action:', todo);
	return {
		type: 'ADD_TODO',
		payload: todo
	}
}

export function toggleTodoAction(updatedTodo) {
	return {
		type: 'TOGGLE_TODO',
		payload: updatedTodo
	}
}

export function deleteTodo(id) {
	return {
		type: 'DELETE_TODO', 
		payload: id
	}
}