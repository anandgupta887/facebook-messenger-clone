import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, Button, FormControl, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "pratik", text: "Hello" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("enter your name:"));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello {username}</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Type your message here...</InputLabel>
          <Input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            id="my-input"
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClick}
            disabled={!input}
            type="submit"
          >
            Send Message
            {/* <SendIcon /> */}
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
