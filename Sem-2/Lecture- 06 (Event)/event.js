// const h1 = document.getElementById("heading");

// h1.addEventListener("dclick",()=>{})


const html = document.getElementsByTagName("html")
const body = document.getElementsByTagName("body")[0];
body.style.height = "100vh"
body.addEventListener("dblclick",(e)=>{
    console.log(e.clientX,e.clientY);
    const circle = createCircle();
    circle.style.position = "absolute"
    circle.style.left = `${e.clientX - obj.radius}`;
    circle.style.right = `${e.clientY - obj.radius}`;
    body.append(circle)
})

function createCircle(){
    const div = document.createElement("div");
    const radius = Math.random(Math.random()*150) + 50
    div.style.height = `${(radius*2)}px`
    div.style.width = `${(radius*2)}px`
    div.className = "circle";
    let sol = {
        circle:div,
        radius:radius
    };
    return sol;
}
