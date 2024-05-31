function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let currentSeconds = today.getSeconds();

    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = currentSeconds;

    let arrow = document.getElementById('arrow');
    clock.style.transform = `rotate(${currentSeconds * 6}deg) translate(0, -50px)`;
}

setInterval(showTime, 1000);