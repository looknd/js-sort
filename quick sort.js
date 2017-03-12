
function quickSort(arr){
	let len = arr.length;
	if (len <= 1) { return arr; }
	let pivot=arr[0],
	    left =[],
	    right=[];
    for(let i=1;i<len;i++){
    	if(arr[i]<=pivot){
    		left.push(arr[i]);
    	}else{
            right.push(arr[i]);
    	}
    }
    return quickSort(left).concat(pivot,quickSort(right));
}


let arr1=[9,50,20,26,2,13,2,13,28,38,44,46,5,15,19];
quickSort(arr1);