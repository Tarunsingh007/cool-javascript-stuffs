function swap(x,y)
{
  x=x+y;
  y=x-y;
  x=x-y;
  return [x,y];
}
function heap(arr,s,n)
{
	if(s==1)
		{
			console.log(arr);
			return;
		}
	for(let i=0; i<s;i++)
	{
		heap(arr,s-1,n)
		if(s%2==1)
			{
				var t=arr[0];
				arr[0]=arr[s-1];
				arr[s-1]=t;
			}
		else
			{
				var t=arr[i];
				arr[i]=arr[s-1];
				arr[s-1]=t;
			}
	}
}