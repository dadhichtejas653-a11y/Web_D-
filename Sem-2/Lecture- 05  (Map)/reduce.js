let arr = [23,1,2,6,34,23,4];
let ans=arr.reduce((acc,element,index,arr)=>{
    for(let i = 0 ; i <n ; i++){
    if(arr[i]>arr[i+1]){
        acc = arr[i];
    }
    return acc;
    }
    

},0);
console.log(ans);
