export default function(state = 0, action) {
	switch(action.type) {
		case 'INCREMENT':
			// console.log(action.payload)
			return action.payload + 1;
		default:
			return state;
	}
}