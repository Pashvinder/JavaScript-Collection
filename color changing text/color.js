let namee=document.getElementById("head");
function color(){
let el=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let hex="#";
    for(let i=0;i<6;i++){
    hex+=el[Math.floor(Math.random()*el.length)]
    }
    namee.style.color=hex;
}
color();
setInterval(color,1000);