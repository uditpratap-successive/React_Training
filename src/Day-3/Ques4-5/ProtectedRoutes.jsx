import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

let auth = localStorage.getItem("loginState")
// console.log(auth,typeof(auth))
let token;
if(auth==='true'){
   token = true;
}
else 
token = false;

// console.log(token,typeof(token))
return (
   token ? <Outlet/> : <Navigate to='/'/>
)}
export default ProtectedRoutes;