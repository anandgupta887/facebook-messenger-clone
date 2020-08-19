import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello User</h1>
      <form>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={handleClick} type="submit">
          submit
        </button>
      </form>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
