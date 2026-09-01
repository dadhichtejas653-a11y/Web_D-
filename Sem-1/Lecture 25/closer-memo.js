function sum(n){
  let s = 0;
   for(let i = 0;i<=n;i++){
    s+=i;
   }
  return s;
}
function memorization(fn){
    let cache={};
    return (n)=>{
        if(cache[n]){
            return cache[n];
        }
        else{
            let result=fn(n);
            cache[n]=result;
            return cache[n];
        }
    }
}
let mayank = memorization(sum);
console.log(mayank(9));

