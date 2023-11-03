

export class Node {
  val: number
  children: Node[]
  constructor(val?: number, children?: Node[]) {
    this.val = (val === undefined ? 0 : val)
    this.children = (children === undefined ? [] : children)
  }
}

export function maxDepth(root: Node | null): number {

  if (!root) {
    return 0
  }

  const deep = (node: Node | null, depth: number): number => {
    if (!node) {
      return 0
    }

    let max = depth + 1

    for (const n of node.children) {
      if (n.children) {
        max = Math.max(deep(n, depth + 1), max)
      }
    }

    return max

  }

  return deep(root, 0)
};