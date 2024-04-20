import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateName':
            return { ...state, name: action.payload };
        case 'updatePassword':
            return { ...state, password: action.payload };
        case 'submit':
            return { ...state, issubmit: true };
        default:
            return state;
    }
};

const Loginform = () => {
    const initialState = {
        name: '',
        password: '',
        issubmit: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="name">Enter the name</label>
            <input
                type="text"
                id="name"
                value={state.name}
                onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value })}
            />
            <label htmlFor="password">Enter the password</label>
            <input
                type="password"
                id="password"
                value={state.password}
                onChange={(e) => dispatch({ type: 'updatePassword', payload: e.target.value })}
            />
            <button onClick={() => dispatch({ type: 'submit' })} style={{ color: 'red' }} disabled={state.issubmit}>
                Submit
            </button>
            {state.issubmit && <h2>{state.name}</h2>}
        </div>
    );
};

export default Loginform;
