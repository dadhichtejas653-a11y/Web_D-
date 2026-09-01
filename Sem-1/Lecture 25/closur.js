function createCounter(){
    let count = 0;
    function counter(){
        count ++;
        console.log(count);
    }
    return counter;
}
let ans = createCounter();
console.log(ans);

ans();
ans();


let paaji = createCounter();
paaji();
paaji();
paaji();
