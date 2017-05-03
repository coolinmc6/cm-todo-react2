const todos = [
	{ text: "Welcome to Colin's React Todo List!", ID: 1, complete: false},
	{ text: "Click an item to mark it complete or incomplete.", ID: 2, complete: true},
	{ text: "Use the filters to show all items or only the completed or not yet completed items.", ID: 3, complete: false},
	{ text: "Click the red X to delete it...though you could've probably figured that out", ID: 4, complete: false}
]

export default function(state = todos, action) {
	switch(action.type) {
		case 'ADD_TODO':
			// console.log('Reducer: ',state);
			return [...state, action.payload]
		case 'TOGGLE_TODO':
			// find the index of the todo in state
			const todoIndex = state.findIndex((item) => item.ID === action.payload.ID );

			// create updated list of items
			const updatedList = [...state.slice(0,todoIndex),
								action.payload,
								...state.slice(todoIndex+1)]
			return updatedList;
		default:
			return state;
	}
}