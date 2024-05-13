'use strict'

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        
        if (seconds == 0) setTimeout(() => alert('Buon Anno!'));
    }, 1000);

    document.getElementById('stop').addEventListener('click', function() {
        clearInterval(intervalId);
        alert('Buon Anno!');
    });
}

window.onload = function () {
    let count = 10 * 1,
        display = document.querySelector('#time');
    startTimer(count, display);
};
