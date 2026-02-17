let seconds = 0;
let interval;

function updateTime() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    document.getElementById("time").innerText =
        hrs + ":" + mins + ":" + secs;

    seconds++;
}

function start() {
    if (!interval) {
        interval = setInterval(updateTime, 1000);
    }
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    document.getElementById("time").innerText = "00:00:00";
}
