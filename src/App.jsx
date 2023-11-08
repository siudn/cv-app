import { useState } from "react";
import "./App.css";
import Header from "./header";

function App() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange}></input>
      <Header name={name}></Header>
    </>
  );
}

export default App;
