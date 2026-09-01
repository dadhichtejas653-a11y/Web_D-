let nums = [2, 2, 4, 5, 4, 5, 6];
console.log(nums);
let ans = [];


for (let i = 0; i < nums.length; i++) {
    for(let j =1 ; j < nums.length ; j++){
        if(nums[i]==nums[j]){
            nums.pop(j)
        }
    }
    
}

console.log(nums);
