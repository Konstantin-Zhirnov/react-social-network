import React from 'react';
import s from './MyPosts.module.sass'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'} validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Добавить пост</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = React.memo(props => {

    let postsElement = [...props.posts]
        .reverse()
        .map(el => <Post message={el.message} id={el.id} key={el.id}
                                                   likeCount={el.likeCount}/>)


    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={s.posts_block}>
            <h3>Мои посты:</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})


export default MyPosts