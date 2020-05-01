import React from 'react';
import s from './MyPosts.module.sass'
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.posts.map( el => <Post message={el.message} id={el.id} likeCount={el.likeCount} />)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts_block}>
            <h3>Мои посты:</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts