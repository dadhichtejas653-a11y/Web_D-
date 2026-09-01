async function getData() {
    try{
    
    let url =`https://fakestoreapi.com/products`
    let responce = await fetch(url,);
    let data = await responce.json();
    console.log(data);
    displayDOM(data);
    }
    catch(error){
        console.log(error);
        console.log("Thik Kar Chomu..")
    }
    
}


getData();


