import { serve } from "inngest/next";

import helloCron from "../../inngest/helloCron";

export default serve("Vercel demo app", [helloCron]);
