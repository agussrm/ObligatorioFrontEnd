import {combineReducers} from 'redux';
import userReducer from '../Reducers/userReducer';
import teamReducer from '../Reducers/teamReducer'

const rootReducer = combineReducers({
        userReducer,
        teamReducer

})

export default rootReducer;