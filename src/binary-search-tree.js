const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  root() {
    return this.head;
  }

  add(data) {
    if (this.length === 0) {
      this.head = new Node(data);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.length++;
  }

  has(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  remove(data) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === data) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.length--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let minValue = current.data;

    while (current) {
      if (current.data < minValue) {
        minValue = current.data;
      }
      current = current.next;
    }
    return minValue;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let maxValue = current.data;

    while (current) {
      if (current.data > maxValue) {
        maxValue = current.data;
      }
      current = current.next;
    }
    return maxValue;
  }
}


module.exports = {
  BinarySearchTree
};