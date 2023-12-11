import { transpose } from "./solutions/transpose";
import { execute } from "./helpers/performance";
import { search } from "./solutions/search[bs]";
import { searchRange } from "./solutions/searchRange";



execute(() => searchRange([5,7,7,8,8,10], 8))