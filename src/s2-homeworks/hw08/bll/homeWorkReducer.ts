import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if(action.payload==='up'){
                return [...state].sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
            }
            else return [...state].sort((a, b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()));
        }
        case 'check': {
            return state.filter(x=>x.age>=action.payload);
        }
        default:
            return state
    }
}
