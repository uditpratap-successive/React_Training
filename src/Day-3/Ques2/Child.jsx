import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext, Prefcontext } from './Parent'
import './styles.css'; // Import your CSS file

const Child = () => {
    const { isLoggedIn, login } = useContext(AuthContext)
    const { theme, toggletheme } = useContext(Prefcontext)
    const [username, setUsername] = useState('');

    return (
        <>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => login(username)}>Login</button>
            <p>{isLoggedIn ? `Welcome ${username}` : 'Please enter information to login'}</p>
            <button onClick={() => toggletheme()}>Toggle Theme</button>
            <div className={`content ${theme.toLowerCase()}`}>
                {/* Your themed content here */}
                <p>Theme Content</p>
            </div>
        </>
    )
}

export default Child
