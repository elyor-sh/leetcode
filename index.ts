import { execute } from "./helpers/performance";
import {gameOfLife} from "./solutions/gameOfLife";
execute(() => gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))
