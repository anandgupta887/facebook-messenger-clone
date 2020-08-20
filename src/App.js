import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, Button, FormControl, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("enter your name:"));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: username,
      text: input,
    });
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
            autoFocus
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
