
let input = document.querySelector("input");
console.log(input);

let lol = document.querySelector("ol");
console.log(lol);

let button = document.querySelector("button");
console.log(button);

button.addEventListener("click", function() {
    let li = document.createElement("li"); 
    if (input.value == "") {
        alert("Enter Value!");
        return;
    }
    li.innerHTML = `${input.value} <button onclick="Delete(this)" class="del"> Delete </button>`;
    lol.prepend(li);
    input.value = "";
});

function Delete(el) {
  el.parentElement.remove();
}