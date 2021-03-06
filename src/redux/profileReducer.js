import {profileAPI, usersAPI} from "../api/api";
// import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'
const NEW_LIKE_COUNT = 'NEW-LIKE-COUNT'

let initialState = {
    posts: [
        {id: 1, message: "Это мой первый пост.", likeCount: 4},
        {id: 2, message: "Привет. Как дела?", likeCount: 15}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            return {...state, newPostText: '', posts: [...state.posts, newPost]}
        }
        case NEW_LIKE_COUNT: {
            let newPost = state.posts.filter(p => p.id === +action.postId)
            newPost[0].likeCount++
            return {...state, posts: state.posts.filter(p => p.id !== action.postId), newPost}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default: {
            return state
        }
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const addLikeCountCreator = (postId) => ({type: NEW_LIKE_COUNT, postId})


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))

     } else {
      // dispatch(stopSubmit('edit-profile', {_error: response.data.message[0]}))
        //return Promise.reject(response.data.message[0])
        alert('Сервер не позволяет обновить!!!')
    }
}


export default profileReducer