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
  //function to produce inOrder traversal of the given tree.
  traverse(root){
    let arr=[];
    if(root===null){
        return arr;
    }
    else{
        arr.push(this.traverse(root.left));
        arr.push(root.val);
        arr.push(this.traverse(root.right));
    }
    return arr;
}
 isValidBST(root) {
   if(root===null){
       return true;
   }
   let arr=this.traverse(root);

//checking if the produced array 'arr' is in ascending order.
   for(let i=0;i<arr.length;i++){
       for(let j=0;j<i;j++){
           if(arr[j]>=arr[i]){
               return false;
           }
       }
       return true;
   }
}}

// create an object for the BinaryTree
var BST = new binarytree();

// Inserting nodes to the BinaryTree
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


var root = BST.getRootNode();
BST.preorder(root);
console.log(`Tree validation is ${BST.isValidBST(root)}`)


