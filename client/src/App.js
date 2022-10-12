import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import { GetTodos } from "./components/GetTodos";

function App() {
  const [data, setData] = useState([]);
  GetTodos(setData);

  return (
    <>
      <div className="container">
        <Input GetTodos={GetTodos} />
        <List data={data} GetTodos={GetTodos} />
      </div>
    </>
  );
}

export default App;
