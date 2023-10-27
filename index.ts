import { isAcronym } from "./solutions/isAcronym";
import { execute } from "./helpers/performance";

execute(() => isAcronym(["alice","bob","charlie"], 'abc'))