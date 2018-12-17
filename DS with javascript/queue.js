function queue(){
		var arr=[];
		this.enqueue=(data)=>{
			arr.push(data);
		}
		this.dequeue=()=>{
			arr.shift();
		}
		this.show=()=>{
			console.log(arr);
		}
		this.size=()=>{
			console.log(arr.length);
		}
	}