import { serve } from "inngest/next";

import helloCron from "../../inngest/helloCron";
import helloInngest from "../../inngest/helloInngest";

export default serve("Vercel demo app", [helloCron, helloInngest]);
