# javascript算法 更新ing
### 主流排序算法概览
1. **n:** 处理的数据规模
1. **k:** “桶”的数量
1. **In-place:** 占用常数内存，不占用额外内存
1.** Out-place:** 需要占用额外内存
1. **稳定性：** 排序完成后相等的键值的顺序和排序之前它们的顺序相同

<img src="http://upload-images.jianshu.io/upload_images/1867034-1d3e43cdb301fc9b.png?imageMogr2/auto-orient/strip%7CimageView2/2" alt="">


## 冒泡排序（Bubble Sort）


```
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
                swap(arr,j+1,j);
            }
        }
    }
    return arr;	
};

```


## 选择排序（Selection Sort）


```
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

```

## 插入排序（Insertion Sort）


```
function insertionSort(arr){
    let len=arr.length;
    let cur,pre;
    
  	for(let i=1 ; i<len ; i++){
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
```


## 希尔排序（Shell Sort）


```
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
```


## 归并排序（Merge Sort）


```
function mergeSort(arr){
    let len = arr.length;
    
    if(len<2){
        return arr;
    };

    let middle = Math.floor(len/2)，
        left = arr.slice(0,middle)，
        right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let result=[];

    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    };

    while(left.length){
    	result.push(left.shift());
    };

    while(right.length){
    	result.push(right.shift());
    }；

    return result;

}
```


## 快速排序（Quick Sort）


```
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
```


## 堆排序（Heap Sort）


```
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
```


# ......






