function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr){
    let len=arr.length,
        minIndex=0;

	for(let i=0;i<len;i++){
        minIndex=i;

		for(let j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
            	minIndex=j;
            }
	    }

        swap(arr,i,minIndex);
    }
    return arr;	
};



let arr1=[9,50,20,26,2,13,28,38,44,46,5,15,19];
selectionSort(arr1);