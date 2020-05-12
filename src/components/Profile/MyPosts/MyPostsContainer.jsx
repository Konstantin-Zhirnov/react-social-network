import {addLikeCountCreator, addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
        setLikeCount: (postId) =>{dispatch(addLikeCountCreator(postId))}
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer