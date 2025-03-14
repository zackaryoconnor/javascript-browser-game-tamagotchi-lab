const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}


let timeElapsed = 0;
let randomNumber;
let randomState = ``;
let boredomElement = document.querySelector(`#boredom-stat`);
let hungerElement = document.querySelector(`#hunger-stat`);
let sleepinessElement = document.querySelector(`#sleepiness-stat`);
let interval;

const buttonWrapperElement = document.querySelector(`.button-wrapper`);
const gameOverMessageElement = document.querySelector(`#message`);
const playAgainButtonElement = document.querySelector(`#restart`);


const startGame = () => {
    interval = setInterval(() => {
        timeElapsed += 1;
        console.log(timeElapsed, `seconds passed`);
        if (timeElapsed % 5 === 0) {
            getRandomNumber();
            getRandomState();
            updateLabel(randomState);
        }

        if (timeElapsed >= 30) {
            gameOver();
        }
    }, 1000);
};


setTimeout(startGame, 1000)


const updateLabel = label => {
    if (label === `boredom`) {
        state.boredom += randomNumber;
        boredomElement.textContent = state.boredom;
    } else if (label === `hunger`) {
        state.hunger += randomNumber;
        hungerElement.textContent = state.hunger;
    } else if (label === `sleepiness`) {
        state.sleepiness += randomNumber;
        sleepinessElement.textContent = state.sleepiness;
    }
}




const getRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`random number`, randomNumber);
}




const getRandomState = () => {
    const keys = Object.keys(state);
    randomState = keys[Math.floor(Math.random() * keys.length)];
    console.log(`random state:`, randomState);
};




const gameOver = () => {
    if (timeElapsed >= 30) {
        clearInterval(interval);

        gameOverMessageElement.style.visibility = `visible`;
        playAgainButtonElement.style.visibility = `visible`;
    }
}




const resetGame = () => {
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timeElapsed = 0;
    boredomElement.textContent = state.boredom;
    hungerElement.textContent = state.hunger;
    sleepinessElement.textContent = state.sleepiness;
    gameOverMessageElement.style.visibility = `hidden`;
    playAgainButtonElement.style.visibility = `hidden`;
    startGame();
};




playAgainButtonElement.addEventListener(`click`, () => {
    resetGame();
})




buttonWrapperElement.addEventListener('click', event => {
    if (event.target.textContent === `play`) {
        boredomElement.textContent = `0`;
        state.boredom = 0;
    } else if (event.target.textContent === `feed`) {
        state.hunger = 0;
        hungerElement.textContent = `0`;
    } else if (event.target.textContent === `sleep`) {
        state.sleepiness = 0;
        sleepinessElement.textContent = `0`;
    }
});