function sieve(){
	var arr=[];
	for(let i=0; i<50; i++)
	{
		arr[i]=1;
	}
	for(let i=2; i<50; i++)
	{
		if(arr[i]==1)
		{
			for(let j=i*i; j<50; j+=i)
			{
				arr[j]=0;
			}
		}
	}
	return arr;
}