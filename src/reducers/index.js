import {combineReducers} from 'redux';
import {ActiveFilterReducer} from './reducer-active-filters';
import {SelectedCasino} from './reducer-selected-casino'
const allReducers = combineReducers({
    activeFilter: ActiveFilterReducer,
    selectedCasino: SelectedCasino
});
export default allReducers