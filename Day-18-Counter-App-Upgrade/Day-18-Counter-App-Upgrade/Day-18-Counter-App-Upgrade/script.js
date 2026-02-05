let count = 0;

function updateDisplay() {
    let counter = document.getElementById("count");
    counter.innerText = count;

    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function resetValue() {
    count = 0;
    updateDisplay();
}
