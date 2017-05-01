import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';	
	
const rootReducer = combineReducers({	
	count: CounterReducer
});	
	
export default rootReducer;	