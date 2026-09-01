function cart() {
    let item = [];
    let additem =(ele)=>{
        item.push(ele) ;
        console.log(ele);
    }
    let removeitem =()=>{
        item.pop();
    }
    let goto_cart =()=>{
         return[...item];
    }
    let cleareditem =()=>{
        item=[];
        console.log("cart cleared");
        
    }
    return{additem, removeitem, goto_cart , cleareditem}
}

let Tejas = cart();
Tejas.additem("Samsung");
Tejas.additem("Ipad");
Tejas.goto_cart();
Tejas.removeitem();
Tejas.goto_cart();