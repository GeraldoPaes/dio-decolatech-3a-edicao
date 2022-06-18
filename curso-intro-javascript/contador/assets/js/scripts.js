var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var plus = document.getElementById("adicionar");
plus.addEventListener("click", increment, false);

var minus = document.getElementById("subtrair");
minus.addEventListener("click", decrement, false);

function increment() {
    if (currentNumber != 10) {
        currentNumber += 1;
        if(currentNumber > 0) {
            currentNumberWrapper.style.color = 'lightskyblue';
        } 
        else if (currentNumber == 0) {
            currentNumberWrapper.style.color = '#f6f6f6';
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber != -10) {
        currentNumber -= 1;
        if(currentNumber < 0) {
            currentNumberWrapper.style.color = 'lightcoral';
        } 
        else if (currentNumber == 0) {
            currentNumberWrapper.style.color = '#f6f6f6';
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
}