	function insertionsort(arr){
		for(let i=1;i<arr.length;i++)
		{
			var k=arr[i];
			var j=i-1;
			for(j=j;j>=0;j--)
			{
				if(arr[j]>=k)
				{
					arr[j+1]=arr[j];
					arr[j]=k;
					k=arr[j+1];
				}
			}
		}
	}
var arr=[1,5,4,23,3424,234,234,23423,412];
insertionsort(arr);
console.log(arr);