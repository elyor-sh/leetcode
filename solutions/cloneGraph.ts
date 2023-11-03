export class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
      this.val = (val===undefined ? 0 : val)
      this.neighbors = (neighbors===undefined ? [] : neighbors)
  }
}


export function cloneGraph(node: Node | null): Node | null {

const cloned = new Map<Node, Node>();

const deepClone = (node: Node | null) => {
 if (!node) {
   return null;
 }

 if (cloned.has(node)) {
   return cloned.get(node)!;
 }

 const newNode = new Node(node.val);
 cloned.set(node, newNode);
 newNode.neighbors = node.neighbors.map((neighbor) => deepClone(neighbor)!);
                                          
 return newNode;
}

return deepClone(node)

}