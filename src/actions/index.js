export function addCount(count) {
	return {
		type: 'INCREMENT', 
		payload: count
	}
}