import React, { Component } from 'react';
import{ comments } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <header>
         <h1>COMMENTS</h1>
         <p> Add your comments </p>
         <form>
            <input
               type="text"
               name="name"
               placeholder="Add your name"
              
            />
            <input
               type="text"
               name="name"
               placeholder="Add your comment"
              
            />

            <button type="submit" name="submit" value="submit">
               Submit
            </button>
         </form>
      </header>
      <div>
         <h2>COMMENTS</h2>
         <h3>Number of Comments</h3>
         <ul></ul>
      </div>
   </div>
    );
  }
}

const mapToProps = ({comments}) => ({comments});

export default connect(mapToProps)(App);
