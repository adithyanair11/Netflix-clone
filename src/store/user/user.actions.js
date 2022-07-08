import { USER_ACTIONS_TYPES } from "./user.types";
import {createAction} from '../../utils/reducer/reducer.utils';

export const setCurrentUser = (user) => {
    return createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER,user);
}