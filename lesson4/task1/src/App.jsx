import React from "react";
import Counter from "./Counter.jsx";

const App = () => {
  return (
    <>
      <Counter start={15} interval={1000} />
      <Counter start={18} interval={2000} />
      <Counter start={66} interval={3000} />
    </>
  );
};
export default App;
