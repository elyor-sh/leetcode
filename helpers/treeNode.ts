
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export const fromArrayToTree = (array: (number | null)[]): TreeNode | null => {
  if (array.length === 0) {
    return null;
  }

  const buildTree = (index: number): TreeNode | null => {
    if (index >= array.length || array[index] === null) {
      return null;
    }

    const node = new TreeNode(array[index] as number);
    node.left = buildTree(2 * index + 1);
    node.right = buildTree(2 * index + 2);

    return node;
  };

  return buildTree(0);
}

type ToArray = null | (number | null)[]

export const fromTreeToArray = (tree: TreeNode | null): ToArray => {
  if (!tree) {
    return null
  }

  const result: ToArray = [];
  const queue: (TreeNode | null)[] = [tree];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
