let main = document.getElementById("main");

function addTask(){
let taskValue = document.getElementById("task").value;

let p = document.createElement("p");
p.style.margin = "0";
p.style.padding = "10px";
p.style.borderRadius = "5px";
p.style.fontSize = "22px";
p.style.fontWeight = "600";
p.textContent = taskValue;


let complete = document.createElement("button");
complete.textContent = "Complete";
complete.style.backgroundColor = "#11b93b";
complete.style.border = "none";
complete.onclick = function () {
    div.style.backgroundColor = "#28ee00ee"; 
};

let process = document.createElement("button");
process.textContent = "In Process"; 
process.style.backgroundColor = "#c9cc11";
process.style.border = "none";
process.onclick = function () {
    div.style.backgroundColor = "#c9cc11"; 
};

let cancel = document.createElement("button");
cancel.textContent = "Cancel"; 
cancel.style.backgroundColor = "#cc0000";
cancel.style.border = "none";
cancel.onclick = function () {
    div.style.backgroundColor = "#cc1121"; 
};

let btn = document.createElement("button");
btn.textContent = "DELETE";
btn.style.backgroundColor = "#ffffff";
btn.style.color = "black";
btn.style.border = "none";
btn.style.padding = "5px 10px";
btn.style.borderRadius = "5px";


let buttondiv = document.createElement("div");
buttondiv.style.display = "flex";
buttondiv.style.gap = "10px";

buttondiv.appendChild(process);
buttondiv.appendChild(complete);
buttondiv.appendChild(cancel);
buttondiv.appendChild(btn);


let div = document.createElement("div"); 
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.backgroundColor = "#aaa"; 
div.style.margin = "10px 0";
div.style.padding = "10px";
div.style.borderRadius = "20px";

div.appendChild(p); 
div.appendChild(buttondiv); 

main.appendChild(div);


// delete function
btn.onclick = function () {
    div.remove();
};

document.getElementById("task").value = "";
}