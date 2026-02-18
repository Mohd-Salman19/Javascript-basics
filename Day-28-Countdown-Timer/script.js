let timer;
let timeLeft = 0;

function startTimer() {
    timeLeft = document.getElementById("secondsInput").value;

    if (!timeLeft) return;

    document.getElementById("time").innerText = timeLeft;

    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time up!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("time").innerText = "00";
}
