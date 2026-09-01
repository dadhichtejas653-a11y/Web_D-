function weatherforcast(){
    let input = document.querySelector("input");
    let value = input.value.trim();

    if(value == ""){
        alert("Please enter city");
        return;
    }

    const API_KEY = "cc78f577884fde13d63d61e54989e331";

    async function fetchdata() {
        try { 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`;
            let take = await fetch(url);
            let convert = await take.json();

            if (convert.cod !== 200) {
                throw new Error("City not found");
            }

            display(convert);
        }   
        catch {
            let main = document.querySelector("main");
            main.innerHTML = `<h1>City not found</h1>`;
        }
    }

    fetchdata();
}

function display(data){ 
    let main = document.querySelector("main");  
    
    main.innerHTML = `
        <img src="img.jpg" alt="Weather">
        <section>
            <h1>${data.name}</h1>
            <h2>Temperature: ${data.main.temp} °C</h2>
            <h3>Weather: ${data.weather[0].description}</h3>
            <h3>Humidity: ${data.main.humidity}%</h3>
            <h3>Wind Speed: ${data.wind.speed} m/s</h3>
        </section>
    `;
}