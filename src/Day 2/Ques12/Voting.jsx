/*.Create a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option.
*/

import React, { useReducer } from 'react';

const initialState = {
  bjpVotes: 0,
  congressVotes: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'BJP_VOTE':
      return { ...state, bjpVotes: state.bjpVotes + 1 };
    case 'CONGRESS_VOTE':
      return { ...state, congressVotes: state.congressVotes + 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>BJP Votes: {state.bjpVotes}</h1>
        <button onClick={() => dispatch({ type: 'BJP_VOTE' })}>VOTE FOR BJP</button>
      </div>
      <div>
        <h1>Congress Votes: {state.congressVotes}</h1>
        <button onClick={() => dispatch({ type: 'CONGRESS_VOTE' })}>VOTE FOR CONGRESS</button>
      </div>
    </>
  );
}

export default UseReducer;
