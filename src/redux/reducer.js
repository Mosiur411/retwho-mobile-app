import {combineReducers} from 'redux';
import commonReducer from './commonReducer';

const appReducer = combineReducers({
  commonReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
