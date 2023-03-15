// things to dynamically change:
// text
// container

const container = document.querySelector('.container');

const text = document.querySelector('.text');

const totalTime = 7500;
const breathTime = totalTime/5*2;
const holdTime = totalTime/5;

function breathAnimation () {
    text.innerText = 'Breath In';
    container.className = 'container grow';
    setTimeout(() => 
    {
        text.innerText = 'Hold'
        setTimeout(() => 
        { 
            text.innerText = 'Breath Out'
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)
}

breathAnimation();
setInterval(breathAnimation, totalTime);