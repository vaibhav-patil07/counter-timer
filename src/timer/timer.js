const displayFlex = "display--flex";
const flexDirectionCol = "flex-direction--col";
const justifyCenter = "justify-content--center";
const alignCenter = "align-items--center";

let timerRunning = false;
let hour=0;
let minute=0;
let second=0;

const createTimer = () =>{
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    const timerContainer = document.createElement('div');
    const hrMinContainer =  document.createElement('div');
    const secContainer =  document.createElement('div');
    const buttonsContainer =  document.createElement('div');
    const hourCircle =  document.createElement('div');
    const minuteCircle =  document.createElement('div');
    const secondCircle =  document.createElement('div');
    const hourTimer =  document.createElement('div');
    const minuteTimer =  document.createElement('div');
    const secondTimer =  document.createElement('div');
    const hourHeading =  document.createElement('div');
    const minuteHeading =  document.createElement('div');
    const secondHeading =  document.createElement('div');
    const resetButton = document.createElement('button');
    const playPauseButton = document.createElement('button');


    hourCircle.id = "hour-circle";
    minuteCircle.id = "minute-circle";
    secondCircle.id = "second-circle";
    hourTimer.id = "hour-timer";
    minuteTimer.id = "minute-timer";
    secondTimer.id = "second-timer";
    resetButton.id = "reset-button";
    playPauseButton.id = "play-pause-button";
    

    container.classList.add(...["container",displayFlex, justifyCenter, alignCenter,flexDirectionCol]);
    heading.classList.add("timer-heading");
    timerContainer.classList.add(...["timer-container",displayFlex, flexDirectionCol, justifyCenter, alignCenter]);
    hrMinContainer.classList.add(...["hr-min-container",displayFlex,justifyCenter,alignCenter]);
    secContainer.classList.add(...["sec-container",displayFlex,justifyCenter,alignCenter]);
    buttonsContainer.classList.add(...["button-container",displayFlex,justifyCenter,alignCenter]);
    hourCircle.classList.add(...["circle","wave-animation",displayFlex,flexDirectionCol,alignCenter,justifyCenter]);
    minuteCircle.classList.add(...["circle","wave-animation",displayFlex,flexDirectionCol,alignCenter,justifyCenter]);
    secondCircle.classList.add(...["circle","wave-animation",displayFlex,flexDirectionCol,alignCenter,justifyCenter]);
    hourTimer.classList.add("timer");
    minuteTimer.classList.add("timer");
    secondTimer.classList.add("timer");
    hourHeading.classList.add("time-heading");
    minuteHeading.classList.add("time-heading");
    secondHeading.classList.add("time-heading");
    resetButton.classList.add("timer--button");
    playPauseButton.classList.add("timer--button");

    heading.innerText = "TIMER";
    hourTimer.innerText = 0;
    minuteTimer.innerText = 0;
    secondTimer.innerText = 0;
    hourHeading.innerText = "HOUR";
    minuteHeading.innerText = "MINUTE";
    secondHeading.innerText = "SECOND";
    resetButton.innerText = "Reset";
    playPauseButton.innerText = "Start";

    resetButton.onclick = resetTimer;
    playPauseButton.onclick = playPauseTimer;

    document.getElementById("root").appendChild(container);
    container.appendChild(heading);
    container.appendChild(timerContainer);
    timerContainer.appendChild(hrMinContainer);
    timerContainer.appendChild(secContainer);
    hrMinContainer.appendChild(hourCircle);
    hrMinContainer.appendChild(minuteCircle);
    secContainer.appendChild(secondCircle);
    hourCircle.appendChild(hourHeading);
    minuteCircle.appendChild(minuteHeading);
    secondCircle.appendChild(secondHeading);
    hourCircle.appendChild(hourTimer);
    minuteCircle.appendChild(minuteTimer);
    secondCircle.appendChild(secondTimer);
    container.appendChild(buttonsContainer);
    buttonsContainer.appendChild(resetButton);
    buttonsContainer.appendChild(playPauseButton);
}

const updateTimer = () =>{
    document.getElementById("hour-timer")
    .innerText = hour;
    document.getElementById("minute-timer")
    .innerText = minute;
    document.getElementById("second-timer")
    .innerText = second;
    const playPauseButton = document.getElementById("play-pause-button");
    if(timerRunning){
        playPauseButton.innerText = "Pause";
    }else{
        playPauseButton.innerText = "Play";
    }
}
const timer = () => {
    if(!timerRunning) return;

    if(second === 59){
        second = 0;
        if(minute === 59){
            minute=0;
            hour++;
        }
        else{
            minute++;
        }
    }
    else{
        second++;
    }
    updateTimer();
}
const resetTimer = () => {
    timerRunning=false;
    hour=0;
    minute=0;
    second=0;
    updateTimer();
}
const playPauseTimer = () => {
    timerRunning=!timerRunning;
    updateTimer();
}

setInterval(timer,1000);

export {createTimer};