import createStore from "redux-zero";
const COMMENTS = [{
    name: 'juan',
    comment: 'holi'
}];

const initialState = {
    comments : COMMENTS,    
};

const store = createStore(initialState);
export default store;