	function linearsearch(arr,key){
		var ans=null;
		for(let i=0;i<arr.length;i++)
		{
			if(arr[i]==key)
			{
				ans=i;
				break;
			}
		}
		return ans;
	}

var arr=[24,24,234,324,32,441,124,235]
var l=linearsearch(arr,441);
console.log(l);