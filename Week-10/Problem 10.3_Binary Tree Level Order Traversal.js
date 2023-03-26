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
levelorder(node)
{
	if(node !== null)
	{
        this.levelorder(node.left);
		console.log(node.data);
		this.levelorder(node.right);
	}
}
getRootNode()
{
	return this.root;
}
}

// create an object for the BinaryTree
var BST = new binarytree();

// Inserting nodes to the BinaryTree
BST.insert(3);
BST.insert(9);
BST.insert(20);
BST.insert(15);
BST.insert(7);

var root = BST.getRootNode();
BST.levelorder(root);
