const SET_USERS_DATA = 'SET_USERS_DATA'


let initialState = {
    usersData: null
}

export default function mainReducer(state = initialState, action) {

    switch (action.type) {

        case SET_USERS_DATA:

            return {
                ...state,
                usersData: action.usersData
            }

        default:
            return state
    }
}


export function setUsersAC(usersData) {
    return {
        type: SET_USERS_DATA,
        usersData: usersData
    }
}
