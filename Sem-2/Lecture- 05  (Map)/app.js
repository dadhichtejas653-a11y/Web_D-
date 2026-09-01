let arr=[23,1,3,4,44,56,76,87];
//argument -> callback function 

let ans=arr.map((element,index,arr)=>{
    return element*element;
});

console.log(ans);
