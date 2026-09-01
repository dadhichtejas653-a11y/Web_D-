fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("actual data..");
        
        console.log(data);
        displayDOM(data);
    })
    .catch((error)=>{
        console.log(error);
        
    });

    function displayDOM(productar) {
    let container = document.querySelector("#container");

    productar.map((Element) => {
        const card = `
            <div class = "card">
                <img src="${Element.image}">
                <h3> ${Element.title}</h3>
                <p> $ ${Element.price}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}