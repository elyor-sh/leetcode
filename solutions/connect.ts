
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}

export function connect(root: Node | null): Node | null {
  if (!root?.left) return root;

    root.left.next = root.right;
    root.right!.next = root.next ? root.next.left : null;

    connect(root.left);
    connect(root.right);

    return root;
};