let arr = [];                        
console.log(arr);

arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);     

arr.pop();
console.log(arr);      

arr.unshift(5);
console.log( arr);  

arr.shift();
console.log(arr);    



//Q-7
let nums = [10, 20, 30, 40, 50];


let sliceResult = nums.slice(1, 3);
console.log(sliceResult);   


nums.splice(2, 1);  
console.log(nums);      


console.log( nums);   






for (let val of nums) {
  console.log(val);
}


for (let idx in nums) {
  console.log(`index: ${idx}, value: ${nums[idx]}`);
}


