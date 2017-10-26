import store from './store';

export const addComment = (name,comment) => {
    let oldComments = store.getState().comments;
    const newComments = oldComments.concat({
       id: oldComments.length,
       name: name,
       comment: comment
    });
    store.setState({
       comments: newComments
    });
 };

 export const removeComment = (name, comment) =>{
    let oldComments = store.getState().comments;
    const newComments = oldComments.filter((item, index)=> item != index);
    store.setState({
       comments: ''
    });
 };

