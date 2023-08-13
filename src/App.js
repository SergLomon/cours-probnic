import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [value, setValue] = useState("Текст в инпуте!");

  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
