import React from "react";
import ReactDOM from "react-dom";
import NumbersList from "./NumbersList.jsx";

const numbers = [1,2,3,4,5];

const element = document.querySelector("#root");
const list =<ul>list</ul>;

ReactDOM.render(<NumbersList numbers={numbers}/>, element);
