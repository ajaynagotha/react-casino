import {combineReducers} from 'redux';
import {ActiveFilterReducer} from './reducer-active-filters';
import {SelectedCasino} from './reducer-selected-casino'
import {results} from './result-list'
const allReducers = combineReducers({
    activeFilter: ActiveFilterReducer,
    selectedCasino: SelectedCasino,
    results: results
});
export default allReducers