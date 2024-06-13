import { useEffect, useState } from "react";
import { sendEvent, getEvents } from "@verint/utils";
import { MessageList } from "@verint/utils";

export default function Root(props) {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const subscription = getEvents().subscribe((event) => {
      if (event.source === "app2") {
        setMessages((prev) => [...prev, event]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>{props.name} is mounted!</h1>
      <button
        onClick={() =>
          sendEvent({
            source: "app1",
            message: "Hello from app1",
            timestamp: Date.now(),
          })
        }
      >
        Send message to app2
      </button>
      <div>
        Messages from app2:
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
