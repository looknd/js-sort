function swap(arr,i,j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function bubbleSort(arr){
	let len=arr.length;
	for(let i=0;i<len;i++){
	    for(let j=0;j<len-i-1;j++){
		    if(arr[j]>arr[j+1]){
		    	swap(arr,j+1,j)
		    }
		}
	}
	return arr;	
};

let arr1=[9,50,20,26,2,13,28,38,44,46,5,15,19];
bubbleSort(arr1);