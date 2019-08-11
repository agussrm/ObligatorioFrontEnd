import { ACTIONS } from "../../constants";

export function createUser(user) {
    return {
        type: ACTIONS.CREATE_USER,
            user
    };
}

export function logout(user) {
    return {
        type: ACTIONS.LOGOUT,
        
    };
}

export function login(user) {
    return {
        type: ACTIONS.LOGIN,
        user
    };
}