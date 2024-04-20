import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider';

const Consumer = () => {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  return (
    <div>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => login(username)}>Login</button>
      <p>{isLoggedIn ? `Welcome, ${username}!` : 'Please log in.'}</p>
    </div>
  );
};

export default Consumer;