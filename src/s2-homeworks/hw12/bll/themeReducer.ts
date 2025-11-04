const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdAC): StateType => {
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {themeId: action.id}
        }
        default:
            return state
    }
}

export type changeThemeIdAC = {
    type: 'SET_THEME_ID',
    id: number,
};

export type StateType = {
    themeId: number,
}

export const changeThemeId = (id: number): changeThemeIdAC => ({ type: 'SET_THEME_ID', id })


