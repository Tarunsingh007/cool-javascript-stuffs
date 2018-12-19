function priorityQueue(){
	var arr=[];
	this.enqueue=(data)=>{			if(this.isEmpty())
			arr.push(data);
		else
		{
			var p=0;
			for(let i=0; i<arr.length; i++)
			{
				if(data[1]<arr[i][1])
				{
					arr.splice(i,0,data);
					p=1;
					break;
				}
			}
		}
		if(p==0)
		{
			arr.push(data);
		}
	}

	this.dequeue=()=>{
		arr.shift();
	}
	this.show=()=>{
		for(let i=0; i<arr.length; i++)
		{
			console.log(arr[i][0]);
		}
	}
	this.size=()=>{
		console.log(arr.length);
	}
	this.isEmpty=()=>{
		return arr.length==0;
	}
}