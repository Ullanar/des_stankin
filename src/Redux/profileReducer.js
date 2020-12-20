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
            subject: 'Математика',
            gaps: 3,
            currentMark: 47.8,
            teacher: 'Яновская Елена Александровна',
        },
        {
            subject: 'Информатика',
            gaps: 1,
            currentMark: 49.8,
            teacher: 'Чеканин Владислав Александрович',
        },
    ]

}

export default function profileReducer(state = initialState, action) {
    switch (action.type){
        default:
            return state
    }
}