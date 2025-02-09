function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const date = now.toDateString();

    document.querySelector('#hours .time-text').textContent = hours < 10 ? '0' + hours : hours;
    document.querySelector('#minutes .time-text').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('#seconds .time-text').textContent = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('date').textContent = date;
}

setInterval(updateTime, 1000);
updateTime();
