/*2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.
*/

import React from "react";
import "./User.css";

const UserCard = (props) => {
  return (
    <>
      <div className="user">
        {props.info.map((val) => {
          return (
            <div className="container">
              <div>
                <img src={val.avatar} alt="" className="image" />
              </div>
              <div className="content">
                <h3>Name:{val.name}</h3>
                <h4>Email:{val.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default UserCard;
