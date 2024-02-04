class Treenode {
    constructor(value){
        this.value = value
        this.left = null
        this.right= null
    }
}

rootnode = new Treenode(1)
leftnode = new Treenode(2)
rightnode = new Treenode(3)

// linking the nodes 

rootnode.left= leftnode 
rootnode.right= rightnode

// creating new node 

leftleftnode = new Treenode(4)
rightrightnode = new Treenode(5)


leftnode.left = leftleftnode
leftnode.right = rightrightnode


function inorderTraversal(node) {
    if (node !== null) {
        inorderTraversal(node.left);
        console.log(node.value);
        inorderTraversal(node.right);
    }
}

console.log("Inorder Traversal:");
inorderTraversal(rootnode);