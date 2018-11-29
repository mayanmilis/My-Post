const initialState = {
blogs: []
}

const blogReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_BLOG':
        console.log('created blog', action.blog)
        return state;
        case 'CREATE_BLOG_ERROR':
        console.log('create blog error', action.err)
        return state;
        default:
        return state;
    }
}

export default blogReducer