import React from "react";

const Logout = (props) => {
  return (
    <button className="logout btn" onClick={props.onClick}>
      logout
    </button>
  );
};

export default Logout;
