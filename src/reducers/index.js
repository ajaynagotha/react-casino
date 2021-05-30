import {combineReducers} from 'redux';
import {ActiveFilterReducer} from './reducer-active-filters';
import {SelectedCasino} from './reducer-selected-casino'
import {results} from './result-list'
import {ActiveSettings} from './reducer-settings'
const allReducers = combineReducers({
    activeFilter: ActiveFilterReducer,
    selectedCasino: SelectedCasino,
    results: results,
    settings: ActiveSettings
});
export default allReducers