const counter = document.getElementById('counter');

const valueSpan = document.getElementById('value');

const decrementButton = document.querySelector('button[data-action="decrement"]');

const incrementButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function updateCounterDisplay() {
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterDisplay();
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounterDisplay();
});
updateCounterDisplay();