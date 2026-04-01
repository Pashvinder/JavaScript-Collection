
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let main = document.getElementById("main");

for (let i = 0; i <= 100; i++) {

    let box = document.createElement("div");
    box.classList.add("box");
   
    box.textContent = i;

    box.style.height = "80px";
    box.style.width = "80px";
    main.style.display = "flex";
    main.style.flexWrap = "wrap";
    main.style.gap = "5px";  
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.fontSize = "20px";
    box.style.color = "white";
    box.style.borderRadius = "8px"; 
    box.style.margin="5px"
    

    if (isPrime(i)) {
        box.style.backgroundColor = "red";
    }
    else if (i % 2 === 0) {
        box.style.backgroundColor = "green";
    }
    else {
        box.style.backgroundColor = "yellow";
        box.style.color = "black";
    }

    main.appendChild(box);
}



