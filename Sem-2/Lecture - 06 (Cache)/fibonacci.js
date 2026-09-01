function fib(n){
    if(n<=1)
        return n;
    return fib(n-1)*fact(n-2);
}


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