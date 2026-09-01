function fact(n){
    if(n<1)
        return 1;
    return n*fact(n-1);
}
// let ans = fact(10);
// console.log(ans);

function memo(fn){
    let cache = {};
    if(cache[n]){
        return cache[n];
    }
    else{
        cache[n]=fn(n);
        return cache[n];
    }
}
let factorial = memo(fact);
