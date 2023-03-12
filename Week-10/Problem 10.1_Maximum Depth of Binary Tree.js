class Node
{	constructor(data)
	{	this.data = data;
		this.left = null;
		this.right = null;
	}
}
class binarytree
{
    constructor()
    {
        this.root = null;
    }
insert(data)
{
	var newNode = new Node(data);
	if(this.root === null)
		this.root = newNode;
	else
		this.insertNode(this.root, newNode);
}
insertNode(node, newNode)
{
	if(newNode.data < node.data)
	{
		if(node.left === null)
			node.left = newNode;
		else
			this.insertNode(node.left, newNode);
	}
	else
	{
		if(node.right === null)
			node.right = newNode;
		else
			this.insertNode(node.right,newNode);
	}
}
preorder(node)
{
	if(node !== null)
	{
		console.log(node.data);
		this.preorder(node.left);
		this.preorder(node.right);
	}
}
getRootNode()
{
	return this.root;
}
  maxdepth(root,depth) {
    if(root===null) {
      return depth}
      depth++;
      return Math.max(this.maxdepth(root.left,depth),this.maxdepth(root.right,depth),depth)
    }
  }

// create an object for the BinarySearchTree
var BST = new binarytree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 / \ /
// 5 9 17

var root = BST.getRootNode();
BST.preorder(root);
console.log(`Max depth is ${BST.maxdepth(root,0)}`)
