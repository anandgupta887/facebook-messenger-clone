import React, { useState } from "react";
import "./App.css";
import { Input, Button, FormControl, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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
        <FormControl>
          <InputLabel htmlFor="my-input">Type your message here...</InputLabel>
          <Input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            id="my-input"
          />
        </FormControl>
        <Button onClick={handleClick} disabled={!input} type="submit">
          <SendIcon />
        </Button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
