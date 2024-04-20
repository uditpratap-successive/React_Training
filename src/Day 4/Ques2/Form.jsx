/*.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons.
 Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.*/

 import React, { useReducer } from 'react';

const initialState = {
    name: '',
    address: '',
    phoneNumber: '',
    subscribe: false,
    gender: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_ADDRESS':
            return { ...state, address: action.payload };
        case 'SET_PHONE_NUMBER':
            return { ...state, phoneNumber: action.payload };
        case 'TOGGLE_SUBSCRIBE':
            return { ...state, subscribe: !state.subscribe };
        case 'SET_GENDER':
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                />
            </label>
            <br />
            <label>Address:
                <input
                    type="text"
                    value={state.address}
                    onChange={(e) => dispatch({ type: 'SET_ADDRESS', payload: e.target.value })}
                />
            </label>
            <br />
            <label>Phone Number:
                <input
                    type="number"  // Change input type to "number"
                    value={state.phoneNumber}
                    onChange={(e) => dispatch({ type: 'SET_PHONE_NUMBER', payload: e.target.value })}
                />
            </label>
            <br />
            <label>
                Subscribe:
                <input
                    type="checkbox"
                    checked={state.subscribe}
                    onChange={() => dispatch({ type: 'TOGGLE_SUBSCRIBE' })}
                />
            </label>
            <br />
            <label>
                Gender:
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={state.gender === "male"}
                    onChange={(e) => dispatch({ type: 'SET_GENDER', payload: e.target.value })}
                /> Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={state.gender === "female"}
                    onChange={(e) => dispatch({ type: 'SET_GENDER', payload: e.target.value })}
                /> Female
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
