import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "Это мой первый пост.", likeCount: 4},
        {id: 2, message: "Привет. Как дела?", likeCount: 15}
    ]
}

it(' количество постов должно увеличится', () => {
    // 1. test data
    let action = addPostActionCreator('Тестовое сообщение')
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
})
it(' Соответствие переданного сообщения', () => {
    // 1. test data
    let action = addPostActionCreator('Тестовое сообщение')
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts[2].message).toBe('Тестовое сообщение')
})

it(' После удаления количество постов должно уменьшится', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts.length).toBe(1)
})

it(' Количество постов не должно уменьшится если передан не коректный id', () => {
    // 1. test data
    let action = deletePost(100)
    // 2. action
    let newState = profileReducer(state,action)
    // 3. expectation
    expect(newState.posts.length).toBe(2)
})

