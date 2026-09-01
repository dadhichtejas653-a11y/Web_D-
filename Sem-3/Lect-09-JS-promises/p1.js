let p1 = 67;
p1 = new Promise((resolve, reject) => {
    // resolve("data fetch successfully..");
    // let x = 90;
    // reject("data fetch nahi paya..");
    // reject(x);
    // resolve(x);
    console.log("wait we are working on it..");
    setTimeout(() => {
        resolve("data a gya");
    }, 2000);

});

p1.then((data) => {
    console.log("consumed p1 promises object");
    console.log(data);
})
    .catch((error) => {
        console.log("sorry data nahi aya");
        console.log(error);
    })
    .finally(() => {
         console.log("thank you for services..");
    });



//  console.log(p1);

// p1.then().catch().finally();