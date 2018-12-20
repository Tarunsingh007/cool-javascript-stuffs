    function merge(arr,l,m,r) 
{  
    var n1 = m - l + 1; 
    var n2 =  r - m; 
    var L=[];var R=[]; 
    for (let i = 0; i < n1; i++) 
        L[i] = arr[l + i]; 
    for (let j = 0; j < n2; j++) 
        R[j] = arr[m + 1+ j]; 
    var i=0;
    var j=0;var k=l;
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    }
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    }
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
}
function mergeSort(arr,l,r) 
{ 
    if (l < r) 
    { 
        var m = Math.floor((r+l)/2); 
        mergeSort(arr, l, m); 
        mergeSort(arr, m+1, r); 
        merge(arr, l, m, r); 
    } 
} 
var arr=[1,5,6,45,0,1];
mergeSort(arr,0,arr.length-1);
console.log(arr);