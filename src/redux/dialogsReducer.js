const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: "Константин"},
        {id: 2, name: "Ольга"},
        {id: 3, name: "Савелий"},
        {id: 4, name: "Анастасия"}
    ],
    messages: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела?"},
        {id: 3, message: "Что делаешь?"}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMassageBody
            return  {...state,
                messages: [...state.messages, {id: 4, message: body}]}
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMassageBody) => ({type: SEND_MESSAGE, newMassageBody})

export default dialogsReducer