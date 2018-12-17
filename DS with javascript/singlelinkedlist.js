function singlelinkedlist(){
	var length=0;
	var head=null;

	this.size=function(){
		return length;
	}
	var createNode=function(data){
		this.data=data;
		this.next=null;
	}
	this.head=function(){
		return head;
	}
	this.addNode=function(data){
		let node=new createNode(data);
		if(head==null)
			head=node;
		else
			{
				let currentNode=head;
				while(currentNode.next!=null)
				{
					currentNode=currentNode.next;
				}
				currentNode.next=node;
			}
		length++;
	}
	this.removeNode=function(data){
		if(head.data==data)
			head.data=head.next;
		else
		{
			let currentNode=head;
			let previousNode;
			while(currentNode.data!=data)
			{
				previousNode=currentNode;
				currentNode=currentNode.next;
			}	
			previousNode.next=currentNode.next;

		}
		length--;
	}
	this.isEmpty=function(){
		if(length==0)
			return true;
		else 
			return false;
	}
	this.removeAt=function(index){
		let currentNode=head;
		while(index--)
		{
			currentNode=currentNode.next;
		}
		this.removeNode(currentNode.data);
	}
	this.showlist=function(){
		let currentNode=head;
		if(currentNode==null)
			console.log("list is empty");
		while(currentNode!=null)
		{
			console.log(currentNode.data);
			currentNode=currentNode.next;
		}
	}
	this.indexOf=function(data){
		let currentNode=head;
		let index=0;
		if(currentNode.data==data)
			return index;
		else
		{
			while(currentNode.data!=data)
			{
				currentNode=currentNode.next;
				index++;
			}
			return index;
		}
	}
}