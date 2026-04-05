let head=document.getElementById("head");
let texts=["Pashvinder","Student","Preet"];
function change(){
    let num=Math.floor(Math.random()*texts.length);
    head.innerHTML="I am  "+ texts[num] ;

}

change();
setInterval(change,2000)