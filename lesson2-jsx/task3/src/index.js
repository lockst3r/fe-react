import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const renderSeconds = (time) => {
  const rootElement = document.querySelector("#root");

  const second = new Date().getSeconds();
  const backgroundColor = second % 2 === 0 ? "#fff" : "#000";
  const text = second % 2 !== 0 ? "#fff" : "#000";
  const styles = {
    color: text,
    backgroundColor: backgroundColor,
  };
  const element = (
    <div className="seconds" style={styles}>
      Now is {second}
    </div>
  );
  ReactDOM.render(element, rootElement);
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);
