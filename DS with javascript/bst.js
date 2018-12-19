function bst(){
		var root=null;
		//constructor function to create a new node
		var createNode=function(data){
			this.data=data;
			this.left=null;
			this.right=null;	
		}
		var max=function(a,b)
		{
			if(a>b)
				return a;
			else
				return b;
		}
		//algo for inserting new node
		function insert(node,newNode)
		{
			if(node.data>newNode.data)
			{
				if(node.left==null)
					node.left=newNode;
				else
					insert(node.left,newNode)
			}
			if(node.data<=newNode.data)
			{
				if(node.right==null)
					node.right=newNode;
				else
					insert(node.right,newNode)
			}
		}
		//adding new node
		this.add=function add(data){
			var newNode=new createNode(data);
			if(root==null)
				root=newNode;
			else
			{
				insert(root,newNode);
			}
			return root;
		}
		//inorder traversal
		this.inorder=function inorder(node){
			var froot=node;
			if(froot==null)
				return 0;
			inorder(froot.left);
			console.log(froot.data);
			inorder(froot.right);
		}
		//preorder traversal
		this.preorder=function inorder(node){
			var froot=node;
			if(froot==null)
				return 0;
			console.log(froot.data);
			inorder(froot.left);
			inorder(froot.right);
		}
		//postorder traversal
		this.postorder=function inorder(node){
			var froot=node;
			if(froot==null)
				return 0;
			inorder(froot.left);
			inorder(froot.right);
			console.log(froot.data);
		}
		this.height=function height(node)
		{
			if(node==null)
				return 0;
			else
			{
				let l=height(node.left);
				let r=height(node.right);
				let x=1+max(l,r);
				return x;
			}
		}
		//number of leaves in a BST
		this.leaves=function leaf(node){
			if(node==null)
				return 0;
			if(node.left==null && node.right==null)
				return 1;
			else
			{
				return (leaf(node.right)+leaf(node.left));
				
			}
		}
	}
