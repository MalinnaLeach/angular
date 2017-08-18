import { Action } from '@ngrx/store';

export interface AppState {
    ewoks : Array<EwokProfile>
}

export interface EwokProfile {
    name: string,
    email: string,
    cuteness: number,
    thumbnail: string
}

export const ACTIONS = {
    EWOKS_LOADED: 'EWOKS_LOADED',
}

export function ewoksReducer(
    state: Array<EwokProfile> = [],
    action: Action
    ): Array<EwokProfile> {
    switch (action.type) {
        case ACTIONS.EWOKS_LOADED:
            // Return the new state with the payload as freelancers list
            return Array.prototype.concat(action.payload);
        default:
            return state;
    }
}
