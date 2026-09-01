console.log("Kem Cho");

//-----------------------------------------------

let ans = document.querySelectorAll("h1");
//console.log(ans);

//-----------------------------------------------


//(METHOD TO CHANGE TEXT IN HTML)
ans[0].innerHTML="Mirai School of Technology";
//ans[0].innerText="MSOT";
//ans[0].textContent="Kem-cho-mirai";

//-----------------------------------------------

let body=document.querySelectorAll("body");
body[0].classList.add("darkness");
//body[0].classList.toggle("darkness");
//body[0].classList.remove("darkness");

//-----------------------------------------------


//let img=document.querySelectorAll("img");
//img[0].setAttribute("src","xyz.jpeg");


//-----------------------------------------------



//let li=document.querySelectorAll("li");
//li[0].style.color="purple";
//li[0].style.fontSize="50px";
//li[2].style.color="blue";
//li[2].style.fontSize="30px";

//-----------------------------------------------


//let main = document.createElement("main");
//main.textContent="Yoo, I am Main";
//console.log(main);

//-----------------------------------------------

let head = document.createElement("h1");
head.innerText="Mirai School";
console.log(head);

let main=document.querySelectorAll("main");
//main[0].append(head);
//main[0].prepend(head);
//main[0].before(head);
main[0].after(head);