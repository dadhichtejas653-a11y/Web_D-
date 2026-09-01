async function flipcart(){
try {
//    let payment=  await razarpay(); 
//     let order= await order_assign();
//     let delivery=await delivery();
let responce= await fetch("url");
let data=await responce.json();

//
    //...
    
} catch (error) {
    console.log(error);

    // error handling..
}   

//..

}

flipcart();

// (()=>{})(); IIEF