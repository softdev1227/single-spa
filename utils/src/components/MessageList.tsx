import React from "react";
import { MyEvent } from "../event-bus";

interface MessageListProps {
  messages: MyEvent[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <ul>
    {messages.map((msg, idx) => (
      <li key={idx}>
        {msg.message}{" "}
        <small>({new Date(msg.timestamp).toLocaleString()})</small>
      </li>
    ))}
  </ul>
);

export default MessageList;
