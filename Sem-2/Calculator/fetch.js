async function getData() {
  const app = document.querySelector("#app");

  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/1"
    );

    const data = await response.json();

    const image = document.createElement("img");
    image.src = data.image;
    image.alt = data.title;
    image.style.width = "200px";

    const title = document.createElement("p");
    title.textContent = data.title;

    const price = document.createElement("p");
    price.textContent = `Price: $${data.price}`;

    const category = document.createElement("p");
    category.textContent = `Category: ${data.category}`;

    const description = document.createElement("p");
    description.textContent = data.description;

    app.append(
      image,
      title,
      price,
      category,
      description
    );
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Error: ${error.message}`;

    app.append(errorMessage);
  }
}

getData();