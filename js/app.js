const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}


let timeElapsed = 0;
let randomNumber;
let randomState = ``;

const buttonWrapperElement = document.querySelector(`.button-wrapper`);
let boredomLabel = document.querySelector(`#boredom-stat`);
let hungerLabel = document.querySelector(`#hunger-stat`);
let sleepinessLabel = document.querySelector(`#sleepiness-stat`);


const interval = setInterval(() => {
    timeElapsed += 1
    console.log(timeElapsed, `seconds passed`);
    if (timeElapsed % 5 === 0) {
        getRandomNumber();
        getRandomState();
        updateLabel(randomState);
    }

    if (timeElapsed >= 30) {
        clearInterval(interval);
    }
}, 1000);


const updateLabel = label => {
    if (label === `boredom`) {
        state.boredom += randomNumber;
        boredomLabel.textContent = state.boredom;
    } else if (label === `hunger`) {
        state.hunger += randomNumber;
        hungerLabel.textContent = state.hunger;
    } else if (label === `sleepiness`) {
        state.sleepiness += randomNumber;
        sleepinessLabel.textContent = state.sleepiness;
    }
}


const getRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`random number`, randomNumber)
}


const getRandomState = () => {
    const keys = Object.keys(state);
    randomState = keys[Math.floor(Math.random() * keys.length)];
    console.log(`random state:`, randomState)
};


buttonWrapperElement.addEventListener('click', event => {
    if (event.target.textContent === `play`) {
        boredomLabel.textContent = `0`;
        state.boredom = 0;
    } else if (event.target.textContent === `feed`) {
        state.hunger = 0;
        hungerLabel.textContent = `0`;
    } else if (event.target.textContent === `sleep`) {
        state.sleepiness = 0;
        sleepinessLabel.textContent = `0`;
    }    
});
