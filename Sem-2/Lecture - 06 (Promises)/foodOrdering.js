function OrderFood(item , CookFood) {
    console.log("Order placed");
    setTimeout(() => {
        console.log("Order confirmed");
        CookFood(item)
    }, 1000);
}

function CookFood(item , DeliverFood) {
    console.log("Cooking starts");
    setTimeout(() => {
        console.log("Cooking complete");
        let cookedItem = "Cooked " + item;
        DeliverFood(cookedItem)
    }, 2000);
}

function DeliverFood(cookedItem) {
    console.log("Delivery started");
    setTimeout(() => {
        console.log("Delivered");
        let deliveryStatus = cookedItem + " - Delivered at your door";
       console.log(deliveryStatus);
       
    }, 1500);
}

OrderFood('Pizza',CookFood);

// pass the required paramaeter in function and write the calling of functions such that it will run synchronously