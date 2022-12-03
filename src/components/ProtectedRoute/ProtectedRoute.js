import {  Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  return(
    <>
    {props.loggedIn ? props.children : <Navigate replace to="/"/>} 
    </>
  )
}
export default ProtectedRoute