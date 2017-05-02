export default function(state=[], action) {
	switch(action.type) {
		case 'ADD_TODO':
			// console.log('Reducer: ',state);
			return [...state, action.payload]
		default:
			return state;
	}
}