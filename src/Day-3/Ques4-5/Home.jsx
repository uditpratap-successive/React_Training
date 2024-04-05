import React from 'react';
import { useNavigate } from 'react-router-dom';
import Homemenu from './Homemenu';

const Home = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate('/');
  };

  return (
    <>
      <Homemenu />
      <div>you are at home</div>
      <button onClick={toLogin}>LOGOUT</button>
    </>
  );
};
export default Home;
