import { execute } from "./helpers/performance";
import {numIslands} from "./solutions/numIslands";
execute(() => numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
))
