import {createStore} from 'redux';
import rootReducer from './Reducers/index';

export default function ConfigureStore(initialState){
    return createStore(rootReducer,initialState)
}

