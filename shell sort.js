function shellSort(arr){

    let len= arr.length,
        temp,
        gap=1;
        
    if(gap<len/3){gap=gap*3+1;};
    
    while(gap!==0){
        for(let i=gap ;i<len ; i+=gap){
            let pre =i-gap;
            temp=arr[i];        
            while(pre>=0&&temp<arr[pre]){
                arr[pre+gap]=arr[pre];
                pre-=gap;
            }
            arr[pre+gap]=temp; 
        }
        gap=Math.floor(gap/2);
    }
    return arr;
}


let arr1=[9,50,20,26,2,13,28,38,44,46,5,15,19];
shellSort(arr1);