function countingSort(arr) {

    let arrLen = arr.length,
        box = [], 
        bucket = [];

    for (let i = 0; i < arrLen; i++) {
        box[i]=-1;
        for (let j = 0; j < arrLen; j++) {
            if(arr[i]>=arr[j]){
                box[i]++;
            }
        }
    }

    for (let i = 0; i < arrLen; i++) {
        bucket[box[i]]=arr[i]
    }

    return bucket;
}

let arr1=[9,50,20,26,2,13,28,38,44,46,5,15,19];
countingSort(arr1);