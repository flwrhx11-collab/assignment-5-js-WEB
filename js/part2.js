document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("myText").innerText = "New Text";
});

document.getElementById("colorBtn").addEventListener("click", () => {
    document.getElementById("myDiv").style.backgroundColor = "lightblue";
});

document.getElementById("sizeBtn").addEventListener("click", () => {
    document.getElementById("myDiv").style.fontSize = "24px";
});

document.getElementById("addBtn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = "New Item";
    document.getElementById("myList").appendChild(li);
});

document.getElementById("removeBtn").addEventListener("click", () => {
    let list = document.getElementById("myList");
    if(list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});