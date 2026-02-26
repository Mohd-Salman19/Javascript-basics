function updateClock(){

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let day = now.toDateString();

    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;

    document.getElementById("clock").innerText =
    hours + ":" + minutes + ":" + seconds;

    document.getElementById("date").innerText = day;
}

setInterval(updateClock,1000);

updateClock();
