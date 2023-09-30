let counts1 = setInterval(updated1);
let upto1 = 0;
function updated1() {
    let count = document.getElementById("counter1");
    count.innerHTML = ++upto1;
    if (upto1 === 96) {
        clearInterval(counts1);
    }
}
let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {
    let count = document.getElementById("counter2");
    count.innerHTML = ++upto2;
    if (upto2 === 183) {
        clearInterval(counts2);
    }
}
let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3() {
    let count = document.getElementById("counter3");
    count.innerHTML = ++upto3;
    if (upto3 === 82) {
        clearInterval(counts3);
    }
}