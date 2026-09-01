// function sum(a){
//   return function(b){
//     return function(c){
//         return a+b+c;
//     }
//   }
// }

// console.log(sum(2)(3)(4));


let add = (nums)=> {
    if (!nums)
        return 0;
    else{
        return function helper(v){
            if(!v)
                return nums;

            nums+=v;
            return helper;
        }
    }
}