function insertionSort(arr){
    let len=arr.length;
    let cur,pre;
  	for(let i=1;i<len;i++){
          pre=i-1;
          cur=arr[i];
          while(cur<arr[pre]&&pre>=0){         
              arr[pre+1]=arr[pre];
              pre--;
          }
          arr[pre+1]=cur;   
      }
    return arr;	
};



let arr1=[9,50,20,26,2,13,28,38,44,46,5,15,19];
insertionSort(arr1);