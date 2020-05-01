const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const  SET_USERS = 'SET-USERS'
const  SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     photoUrl: '/images/ava.jpg',
        //     fullName: "Константин Ж.",
        //     status: 'Я папа',
        //     location: {city: 'Санкт-Петербург', country: 'Россия'}
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     photoUrl: '/images/ava.jpg',
        //     fullName: "Ольга Ж.",
        //     status: 'Я мама',
        //     location: {city: 'Санкт-Петербург', country: 'Россия'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     photoUrl: '/images/ava.jpg',
        //     fullName: "Савелий Ж.",
        //     status: 'Я сынок',
        //     location: {city: 'Санкт-Петербург', country: 'Россия'}
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     photoUrl: '/images/ava.jpg',
        //     fullName: "Анастасия Ж.",
        //     status: 'Я дочка',
        //     location: {city: 'Санкт-Петербург', country: 'Россия'}
        // },
        // {
        //     id: 5,
        //     followed: false,
        //     photoUrl: '/images/ava.jpg',
        //     fullName: "Ирина В.",
        //     status: 'Я бабушка',
        //     location: {city: 'Киев', country: 'Украина'}
        // }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount =(totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching =(isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer