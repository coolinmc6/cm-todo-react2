import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';	
import TodosReducer from './reducer_todos';
	
const rootReducer = combineReducers({	
	count: CounterReducer,
	todos: TodosReducer
});	
	
export default rootReducer;	