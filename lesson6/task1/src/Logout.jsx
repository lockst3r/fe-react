import React from 'react';
import './index.scss';


const Logout = (props) =>{
return  <button className="logout btn" onClick={props.onClick}>logout</button>
}

export default Logout;