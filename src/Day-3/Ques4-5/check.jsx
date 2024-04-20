// import React from "react";
// import { useState } from "react";
// import  {useNavigate } from "react-router-dom";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   const Authenticator = () => {
//     const navigate = useNavigate();
//     if (name === "udit" && password === "123456") {
//       localStorage.setItem("loginState", true);
//       navigate('/home')
//     }
//   };
//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={()=>Authenticator()}>Login</button>
//     </>
//   );
// };

// export default Login;