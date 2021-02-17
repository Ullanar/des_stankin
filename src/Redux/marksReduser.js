const SET_MARKS_DATA = "SET_MARKS_DATA"

let initialState = {
    marksData: null
}

export default function marksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MARKS_DATA:
            return {
                ...state,
                marksData: action.marksData
            }

        default:
            return state
    }
}

export const setMarksDataAC = (data) => {
    return {
        type: SET_MARKS_DATA,
        marksData: data
    }
}