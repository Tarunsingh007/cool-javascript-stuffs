function stacks(){
		var stack=[];
		var top=-1;
		this.push=function(data){
			stack.push(data);
			top++;
		}
		this.pop=function(){
			if(top==-1)
				console.log("stack is already Empty");
			stack.pop();
			top--;
		}
		this.show=function(){
			if(top==-1)
				console.log("nothing to show");
			else
			{
				while(top!=-1)
				{
					console.log(stack[top]);
					top--;
				}
			}
		}
	}