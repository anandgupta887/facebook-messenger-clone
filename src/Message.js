import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"}`} ref={ref}>
      <Card className={`${isUser ? "message__sent" : "message__received"}`}>
        <CardContent>
          <Typography variant="h5" component="h5">
            {!isUser && `${message.username} : `}
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
