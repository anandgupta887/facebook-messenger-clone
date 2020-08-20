import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, FormControl, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
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
    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt=""
      />
      <h1>Hello {username}</h1>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            placeholder="Enter your message..."
            className="app__input"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            id="my-input"
            autoFocus
          />
          <IconButton
            className="app__button"
            variant="contained"
            color="primary"
            onClick={handleClick}
            disabled={!input}
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
