import { execute } from "./helpers/performance";
import { arrayFromLinkedList, linkedListGenerator } from "./helpers/listNode";
import { reverseBetween } from "./solutions/reverseBetween";

execute(() => arrayFromLinkedList(reverseBetween(linkedListGenerator([1,2,3,4,5]), 2, 4)))
