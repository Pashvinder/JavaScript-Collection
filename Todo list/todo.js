let main=document.getElementById("main");

function addTask(){
let taskValue=document.getElementById("task").value;
let p=document.createElement("p")
p.style.paddingTop="5px"
p.style.margin = "0";
p.style.padding="10px"
p.style.borderRadius="5px"
p.style.fontSize="22px"
p.style.fontWeight="600"
p.textContent=taskValue;


let compelte=document.createElement("button");
compelte.textContent="Complete";
compelte.style.marginLeft="90%"


let progress=document.createElement("button");
progress.textContent="Complete";
progress.style.marginLeft="90%"

let cancel=document.createElement("button");
cancel.textContent="In Progress";
cancel.style.marginLeft="90%"



let btn = document.createElement("button");
btn.textContent="DELETE"
btn.style.backgroundColor = "#ffffff";
btn.style.color = "black";
btn.style.border = "none";
btn.style.padding = "5px 10px";
btn.style.borderRadius = "5px";



let div = document.createElement("div"); 
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.backgroundColor = "#aaa"; 
div.style.margin = "10px 0";
div.style.padding = "10px";
div.style.borderRadius = "20px";

div.appendChild(p); 
div.appendChild(progress)
div.appendChild(compelte)
div.appendChild(cancel)
div.appendChild(btn); 

main.appendChild(div);


    btn.onclick = function () {
    div.remove();
};


document.getElementById("task").value="";
}
