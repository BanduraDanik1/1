function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body')
const ref = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
}

ref.startBtn.addEventListener('click', onStartBtn);
ref.stopBtn.addEventListener('click', onStopBtn);
let intervalId = null;
let isActive = false;

function onStartBtn (e) {
    if(isActive) {
        return
    }
    isActive = true;
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
        console.log(`Color - ${bodyEl.style.backgroundColor}`)
    }, 1000);
}

function onStopBtn (e) {
    clearInterval(intervalId)
    isActive = false;
}