import React from 'react';
import WithAuth from './WithAuth';
import { Navigate, Outlet} from 'react-router-dom';

const Protected= (props) => {

  return (
    <div>
     {
        props.isAuthenticated==="true" ? <Outlet/> : <Navigate to="/" />
     }
    </div>
  );
};

// Wrap the component with the withAuth HOC
export default WithAuth(Protected);