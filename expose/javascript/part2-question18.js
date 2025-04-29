function getCurrentTime() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

setInterval(getCurrentTime, 1000);