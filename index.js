
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),

};

const COLOR_CHANGE_DELAY = 1000;

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyBgColor(color) {
    refs.body.style.backgroundColor = color;
};

let intervalColorId = null;

function start() {
    intervalColorId = setInterval(() => {
        const randomColorNumber = randomIntegerFromInterval(0, colors.length - 1);
        changeBodyBgColor(colors[randomColorNumber]);
    }, COLOR_CHANGE_DELAY);

    refs.startBtn.setAttribute('disabled', true);
}

function stop() {
    clearInterval(intervalColorId);
    refs.startBtn.removeAttribute('disabled');
}


