import React, { Component } from 'react';
import {
  addComment,
  removeComment,

} from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ comments }) => {
  const allComments = comments.map(comment => <li key={comment.id} >Name:<br />{comment.name} <br /> Comment: <br /> {comment.comment}</li>);
  const countComments = comments.length;
  const onSubmit = e => {
    e.preventDefault();
    addComment(this.refInputName.value, this.refInputComment.value);
  }
  const remove = e => {
    e.preventDefault();
    removeComment(this.refInputName.value, this.refInputComment.value);
  }
  return (
    <div className="wrapper">
      <header>
        <h1>COMMENTS</h1>
        <p> Add your comments </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Add your name"
            ref={e => (this.refInputName = e)}

          />
          <input
            type="text"
            name="name"
            placeholder="Add your comment"
            ref={e => (this.refInputComment = e)}
          />
          <button type="submit" name="submit" value="submit">
            Post Comment
            </button>
        </form>
      </header>
      <div className="main">
        Total Comments : {countComments}
        <ul id="invitedList">
          Comments : {allComments}
        </ul>

      </div>
    </div>
  );

}

const mapToProps = ({ comments }) => ({ comments });

export default connect(mapToProps)(App);
