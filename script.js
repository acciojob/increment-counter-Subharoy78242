document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    incrementBtn.addEventListener('click', () => {
        const currentValue = parseInt(counterElement.innerText, 10);
        alert(currentValue); // Alert the un-incremented value
        counterElement.innerText = currentValue + 1; // Increment the counter
    });
});