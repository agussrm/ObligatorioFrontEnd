import { ACTIONS } from "../../constants";

export function createTeam(team) {
    return {
        type: ACTIONS.CREATE_TEAM,
            team
    };
}