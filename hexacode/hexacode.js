let el=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let body=document.body;
let bg=document.body;
let btn=document.getElementById("change")
btn.onclick=function(){
    let hex="#";
    for(let i=0;i<6;i++){
    hex+=el[Math.floor(Math.random()*el.length)]
    }
body.addEventListener("click",bg)
function bg(){
    bg.style.background=hex;
}
}
