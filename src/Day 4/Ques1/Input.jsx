/*1.Create a React component with an input field. Implement it as a controlled component where the input value is controlled by
 the component's state. When the user types into the input field, the component's state should update accordingly.
*/

import React, { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('');

    return (
        <>
            <input
                type='text'
                placeholder='Enter name'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />  

           <div>{input}</div>
        </>
    );
}

export default Input;
