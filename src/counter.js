let count = 0;

const containerClasses = ["container","height--90vh","display--flex","flex-direction--col","justify-content--center","align-items--center"];
const counterContainerClasses = ["counter-container","display--flex","flex-direction--col","justify-content--center","align-items--center"];
const counterDivClasses = ["counter-div","display--flex","justify-content--center","align-items--center"];
const counterClasses = ["counter","display--flex","justify-content--center","align-items--center"];
const buttonDivClasses = ["button-div", "display--flex","justify-content--center","align-items--center" ];
const counterButtonClasses = ["counter--button"]

const createCounter = () =>{
    const root = document.getElementById("root");
    const container = document.createElement('div');
    const counterContainer = document.createElement('div');
    const counterHeading = document.createElement("h1");
    const counterDiv = document.createElement('div');
    const counter1 = document.createElement('div');
    const buttonDiv = document.createElement("div");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");

    container.classList.add(...containerClasses);
    counterContainer.classList.add(...counterContainerClasses)
    counterDiv.classList.add("counter-div");
    counterHeading.classList.add("coounter-heading");
    counterDiv.classList.add(...counterDivClasses);
    counter1.classList.add(...counterClasses);
    buttonDiv.classList.add(...buttonDivClasses);
    incrementButton.classList.add(...counterButtonClasses);
    decrementButton.classList.add(...counterButtonClasses);
    counterDiv.id = "counterDiv";
    counter1.id = "counter1";
    incrementButton.id="increment-bt";
    decrementButton.id="decrement-bt";

    counterHeading.innerText = "COUNTER";
    counter1.innerText = count;
    incrementButton.innerText = "+";
    decrementButton.innerText = "-"; 

    incrementButton.onclick = incrementCount;
    decrementButton.onclick = decrementCount;

    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(counterDiv);
    counterDiv.appendChild(counter1);
    counterContainer.appendChild(buttonDiv);
    buttonDiv.appendChild(decrementButton);
    buttonDiv.appendChild(incrementButton);
    container.appendChild(counterContainer)
    root.appendChild(container);
    console.log("Created");
    updateCounterDiv(0,count);
    updateCounter();
}

const playBounceAnimation = () => {
    const counter = document.getElementById(`counter1`);
    counter.className = counterClasses.join(" ");
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            counter.classList.add("bouncy-animation");
        });
    });
}

const updateCounterDiv = (oldCount, newCount) => {
    let oldLength = oldCount.toString().length;
    let newLength = newCount.toString().length;
    let difference = newLength - oldLength;
    const counterDiv = document.getElementById("counterDiv");
    if(difference > 0){
        while(oldLength < newLength){
            oldLength++;
            const counter = document.createElement("div");
            counter.id = `counter${oldLength}`;
            counter.classList.add(...counterClasses);
            counterDiv.appendChild(counter);
            playBounceAnimation();
        }
    }
    else if(difference < 0){
        while(difference < 0){
            counterDiv.removeChild(counterDiv.lastElementChild);
            difference++;
        }
    }
}
const updateCounter = () => {
    const countString = count.toString();
    let digitCounter = 1;
    [...countString].forEach((digit) => {
        document.
        getElementById(`counter${digitCounter}`)
        .innerText = digit;
        digitCounter++;
    });
}

const incrementCount = () =>{
    updateCounterDiv(count,count+1);
    count++;
    updateCounter();
}
const decrementCount = () =>{
    updateCounterDiv(count,count-1);
    count--;
    updateCounter();
}

export{createCounter};