var aura=0;
let head=document.querySelectorAll("h1");
function display(){
    //reaction code
    console.log("Button Clicked");
    console.log("reaction code executed");
    aura++;
    console.log(aura);
    head[1].innerHTML=aura;
}


function decrease{
    aura--;
    if(aura>=0){
        head[0].innerHTML(aura);
    }
    else{
        aura=0;
    }
}