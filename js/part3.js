let box = document.getElementById("hoverBox");
box.addEventListener("mouseover", () => box.style.backgroundColor = "green");
box.addEventListener("mouseout", () => box.style.backgroundColor = "red");

document.getElementById("keyInput").addEventListener("keyup", (e) => {
    document.getElementById("displayKey").innerText = e.target.value;
});

function calc(op) {
    let a = parseFloat(document.getElementById("calc1").value);
    let b = parseFloat(document.getElementById("calc2").value);
    let res = 0;
    if(op === '+') res = a + b;
    if(op === '-') res = a - b;
    if(op === '*') res = a * b;
    if(op === '/') res = a / b;
    document.getElementById("calcResult").innerText = res;
}