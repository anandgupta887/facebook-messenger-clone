import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={`${isUser ? "message__sent" : "message__received"}`}>
        <CardContent>
          <Typography variant="h5" component="h5">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
