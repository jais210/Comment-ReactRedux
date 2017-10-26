import createStore from "redux-zero";
const COMMENTS = [{
    name: 'Juan',
    comment: 'holi'
}];

const initialState = {
    comments : COMMENTS,
       
};

const store = createStore(initialState);
export default store;