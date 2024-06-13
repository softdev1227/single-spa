// app2/src/App.tsx
import React, { useEffect, useState } from "react";
import { sendEvent, getEvents, MessageList } from "@verint/utils";

const App2 = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const subscription = getEvents().subscribe((event) => {
      if (event.source === "app1") {
        setMessages((prev) => [...prev, event]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>@verint/app2 is mounted!</h1>
      <button
        onClick={() =>
          sendEvent({
            source: "app2",
            message: "Hello from app2",
            timestamp: Date.now(),
          })
        }
      >
        Send message to app1
      </button>
      <div>
        Messages from app1:
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

export default App2;
