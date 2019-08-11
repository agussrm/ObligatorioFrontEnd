import {ACTIONS} from '../../constants';

const initialState = {
        team:undefined

}

export default function teamReducer(state = initialState, action){
    switch(action.type){
        case ACTIONS.CREATE_TEAM:
            return{...state, team: action.team}
         default: 
            return state
    }

}