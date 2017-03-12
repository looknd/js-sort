function swap(arr,i,j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

let len;

function buildMaxHeap(arr){
    len = arr.length;
    for(let i=Math.floor(len/2);i>=0;i--){
    	heapify(arr,i);
    }
}

function heapify(arr,i){
    let left=2*i+1,
        right=2*i+2,
        largest=i;

    if(left<len&&arr[left]>arr[largest]){
    	largest=left;
    }

    if(right<len&&arr[right]>arr[largest]){
    	largest=right;
    }

    if(largest!==i){
    	swap(arr,i,largest);
    	heapify(arr,largest);
    }
}

function heapSort(arr){
	buildMaxHeap(arr);

	for(let i=len-1;i>=0;i--){
		swap(arr,0,i);
		len--;
		heapify(arr,0);
	}

	return arr;
}

let arr1=[9,50,20,26,2,13,28,38,44,46,5,15,19];
heapSort(arr1);