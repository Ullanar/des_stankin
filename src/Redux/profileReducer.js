const SET_PROFILE_DATA = "SET_PROFILE_DATA"

let initialState = {

    firstName: 'Елизавета',
    lastName: 'Шайгородская',
    group: 'ИДБ-20-10',
    online: false,
    phone: '89011111111',
    birthday: '11.11.2011',
    email: 'liza17ak@gmail.com',
    status: 'test',

    marks: [
        {
            id: 1,
            subject: 'Математика',
            gaps: 3,
            mark: 47.8,
            teacher: 'Яновская Елена Александровна',
        },
        {
            id: 2,
            subject: 'Информатика',
            gaps: 1,
            mark: 49.8,
            teacher: 'Чеканин Владислав Александрович',
        },
    ]

}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profileData: action.profileData
            }

        default:
            return state
    }
}

export const setProfileDataAC = (data) => {
    return {
        type: SET_PROFILE_DATA,
        profileData: data
    }
}