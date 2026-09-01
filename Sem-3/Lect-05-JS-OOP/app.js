console.log("Hello, World!");

function sum(...numbers) {
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}   

sum(1, 2, 3, 4, 5);
sum(1,2);
sum(10, 20, 30);