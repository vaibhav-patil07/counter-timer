import {createCounter} from "./counter.js"
import { createTimer} from "./timer.js";


const displayFlex = "display--flex";
const justifyEnd = "justify-content--end";
const alignCenter = "align-items--center";

let appState = 0;

const createSilderButton = () =>{
    const sliderContainer = document.createElement("div");
    const counterLabel = document.createElement("label");
    const timerLabel = document.createElement("label");
    const sliderButton = document.createElement("input");

    sliderButton.id = "slider";
    sliderButton.type = "range"
    sliderButton.value = 0;
    sliderButton.min = 0;
    sliderButton.max = 1;
    counterLabel.innerText = "Counter";
    timerLabel.innerText = "Timer";

    sliderContainer.classList.add(...[displayFlex,justifyEnd,alignCenter]);

    sliderButton.addEventListener("input", (event) =>{
        appState = event.target.value;
        cleanApp();
        startApp();
    })
    document.getElementById("root").appendChild(sliderContainer);
    sliderContainer.appendChild(counterLabel);
    sliderContainer.appendChild(sliderButton);
    sliderContainer.appendChild(timerLabel);
}
const cleanApp = () =>{
    document.getElementById("root").removeChild(
        document.querySelector(".container")
    );
}
const startApp = () =>{
    if(appState == 0){
        createCounter();
    }
    else{
        createTimer();
    }
}

createSilderButton();
startApp();