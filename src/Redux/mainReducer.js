const SET_NEW_TITLE = 'SET_NEW_TITLE'


let initialState = {
    test: 'Hello World'
}

export default function mainReducer(state = initialState, action) {

    switch (action.type) {

        case SET_NEW_TITLE:

            return {
                ...state,
                test: action.newTitle
            }

        default:
            return state
    }

}


export function setTitleAC (text) {
    return {
        type: SET_NEW_TITLE,
        newTitle: text
    }
}
