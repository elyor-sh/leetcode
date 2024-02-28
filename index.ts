import { execute } from "./helpers/performance";
import {subdomainVisits} from "./solutions/811.subdomainVisits";


execute(() => subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));