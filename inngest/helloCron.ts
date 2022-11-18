import { createScheduledFunction } from "inngest";

const delay = (t: number) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      console.log("delay!");
      res(null);
    }, t)
  );

export default createScheduledFunction(
  "Hello cron",
  "15 12 * * FRI",
  async () => {
    console.log("ok");
    // const times = [200, 2000, 10000];
    // for (let t of times) {
    //   await delay(t);
    // }
    return "Hello cron! v11";
  }
);
