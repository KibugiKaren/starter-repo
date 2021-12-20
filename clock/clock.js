function TimeUpdate() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am_or_pm = document.getElementById('am_or_pm')
    minutes = checkTime(minutes)
    seconds = checkTime(seconds)

if (hours >= 12) {
    am_or_pm.innerText = 'PM';
}else {
    am_or_pm.innerHTML = 'AM'
}

if (hours > 12) {
    hours = hours + 0
}
document.getElementById('hours').innerHTML = hours
document.getElementById('minutes').innerHTML = minutes
document.getElementById('seconds').innerHTML = seconds 

}

setInterval(TimeUpdate, 1000)

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

const date = document.getElementById('date')
const currentYear = new Date().getUTCFullYear()
date.textContent = currentYear
