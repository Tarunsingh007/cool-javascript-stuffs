function kadane(arr)
{
	var maxsum=-99999999999999;
	var sum=0;
	for(let i=0; i<arr.length;i++)
	{
		sum+=arr[i];
		if(maxsum<sum)
			maxsum=sum;
		if(sum<0)
			sum=0;
	}
	return maxsum;
}