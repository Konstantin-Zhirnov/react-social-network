import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Это мой первый пост.", likeCount: 4},
                {id: 2, message: "Привет. Как дела?", likeCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changet')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store

window.store = store
