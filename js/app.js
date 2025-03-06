const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}


let timeElapsed = 0;


const statsWrapper = document.querySelector(`#stats-wrapper`);


const interval = setInterval(() => {
    timeElapsed++;
    console.log(timeElapsed)
    if (timeElapsed % 5 === 0) {
        updateLabel();
    }

    if (timeElapsed >= 30) {
        clearInterval(interval)
    }
}, 1000)


function updateLabel() {
    let boredomLabel = document.querySelector(`#boredom-stat`);
    state.boredom += 1;
    boredomLabel.textContent = state.boredom;
}