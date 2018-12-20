	function binarysearch(arr,key,l,r){
		if(r>=l)
		{
			var m=Math.floor((l+r)/2)
			if(arr[m]==key)
				return m;
			if(arr[m]>key)
				return binarysearch(arr,key,l,m)
			return binarysearch(arr,key,m+1,r)
			
		}
		return null;
	}
var arr=[1,2,3,4,5,6];
var ans=binarysearch(arr,5,0,5)
console.log(ans);