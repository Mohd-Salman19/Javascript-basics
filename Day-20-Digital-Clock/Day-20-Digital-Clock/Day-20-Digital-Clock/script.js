function showTime() {
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("clock").innerText =
        h + ":" + m + ":" + s;
}

setInterval(showTime, 1000);
showTime();
