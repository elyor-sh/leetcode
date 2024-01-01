
// https://leetcode.com/problems/flatten-nested-list-iterator/description/

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
class NestedInteger {
    // If value is provided, then it holds a single integer
    // Otherwise it holds an empty nested list
    constructor(value?: number) {
        // ...
    };

    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    // @ts-ignore
    isInteger(): boolean {
        // ...
    };

    // Return the single integer that this NestedInteger holds, if it holds a single integer
    // Return null if this NestedInteger holds a nested list
    // @ts-ignore
    getInteger(): number | null {
        // ...
    };

    // Set this NestedInteger to hold a single integer equal to value.
    setInteger(value: number) {
        // ...
    };

    // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    add(elem: NestedInteger) {
        // ...
    };

    // Return the nested list that this NestedInteger holds,
    // or an empty list if this NestedInteger holds a single integer
    // @ts-ignore
    getList(): NestedInteger[] {
        // ...
    };
};

export class NestedIterator {

    stack: number[]
    constructor(nestedList: NestedInteger[]) {
        this.stack = []
    }

    flat (nestedList: NestedInteger[]) {
        let nested: NestedInteger;
        while (nested = nestedList.pop()!) {
            if (nested.isInteger()){
                this.stack.push(nested.getInteger()!)
            }
            else {
                this.flat(nested.getList())
            }
        }
    }

    hasNext(): boolean {
        return this.stack.length > 0
    }

    next(): number {
        return this.stack.pop()!
    }
}