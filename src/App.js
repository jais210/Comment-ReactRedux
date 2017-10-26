import React, { Component } from 'react';
import {
  addComment,
  removeComment
} from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({comments}) =>{
const allComments = comments.map((comment)=> <li key={comment.id}>{comment.name}{comment.comment}</li>); 
  const onSubmit = e => {
    e.preventDefault();
    addComment(this.refInput.value);
  } 
    return (
      <div>
        <header>
          <h1>COMMENTS</h1>
          <p> Add your comments </p>
          <form onSubmit= {onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Add your name"
              ref={e => (this.refInput = e)}

            />
            <input
              type="text"
              name="name"
              placeholder="Add your comment"
              ref={e => (this.refInput = e)}
            />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className= "main">
          <h2>COMMENTS</h2>
          <h3>Number of Comments</h3>
          <ul id= "invitedList">{allComments}</ul>
        </div>
      </div>
    );
  
}

const mapToProps = ({ comments }) => ({ comments });

export default connect(mapToProps)(App);
