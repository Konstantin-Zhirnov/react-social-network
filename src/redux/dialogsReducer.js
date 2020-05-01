const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ],
    newMassageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {...state, newMassageBody: action.body}
        }
        case SEND_MESSAGE: {
            let body = state.newMassageBody
            return  {...state,
                newMassageBody: '',
                messages: [...state.messages, {id: 4, message: body}]}
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer