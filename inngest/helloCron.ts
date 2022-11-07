import { createScheduledFunction } from "inngest";

export default createScheduledFunction("Hello cron", "15 12 * * FRI", () => {
  return "Hello cron!";
});
