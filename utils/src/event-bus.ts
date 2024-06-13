// utils/src/event-bus.ts
import { Subject } from "rxjs";

export type MyEvent = {
  source: string;
  message: string;
  timestamp: Date;
};

const eventBus = new Subject<MyEvent>();

timestamp: Date;
export const sendEvent = (event: MyEvent) => eventBus.next(event);
export const getEvents = () => eventBus.asObservable();
