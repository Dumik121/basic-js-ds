const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  

  root() {
    if (this === null) {
      return null;
    }
    return this.rootNode;
  }

  add(data) {
    const node = { data, left: null, right: null };
    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    }
    let current = this.rootNode;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        return; // ignore duplicate values
      }
    }
  }

  find( data ) {
   let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }

    this.rootNode = removeNode(this.rootNode, data);
  }


  min() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    while (current && current.right) {
      current = current.right;
    }
    return current ? current.data : undefined;
  }
  
}

module.exports = {
  BinarySearchTree
};