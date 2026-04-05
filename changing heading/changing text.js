let head=document.getElementById("head");
let texts=["Pashvinder","Student","Son"];
function change(){
    let num=Math.floor(Math.random()*texts.length);
    head.innerHTML="I am a "+ texts[num] ;

}

change();
setInterval(change,1000)