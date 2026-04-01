
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

for (let i = 0; i <= 101; i++) {

    let box = document.createElement("div");
    box.classList.add("box");
    box.innerText = i;

    if (isPrime(i)) {
        box.classList.add("prime");
    }
    else if (i % 2 === 0) {
        box.classList.add("even");
    }
    else {
        box.classList.add("odd");
    }

    main.appendChild(box);
}