import { eventualSafeNodes } from "./solutions/802.eventualSafeNodes";
import { execute } from "./helpers/performance";

execute(() => eventualSafeNodes([[],[0,2,3,4],[3],[4],[]]));