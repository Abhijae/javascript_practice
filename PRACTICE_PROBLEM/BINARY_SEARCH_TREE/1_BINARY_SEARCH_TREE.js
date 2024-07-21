class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}



// creating the nodes 

const rootnode = new TreeNode(1)
const leftnode = new TreeNode(2)
const rightnode = new TreeNode(3)

// connecting the nodes to create a binary

rootnode.left =  leftnode
rootnode.right=  rightnode

// creating more nodes 

const left_left_node = new TreeNode(5)
const right_right_node = new TreeNode(6)

leftnode.left=left_left_node
rightnode.right=right_right_node