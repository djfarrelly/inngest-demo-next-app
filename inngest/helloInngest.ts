import { createFunction } from "inngest";

export default createFunction(
  "Hello Inngest",
  "demo/event.sent",
  ({ event }) => {
    return `Hello ${event.name}!`;
  }
);
