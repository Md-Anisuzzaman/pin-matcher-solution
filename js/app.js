function getPin() {

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        //console.log("Got 3 digit and caling again", pin);
        return getPin();
    }
}
function generatePin() {

    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // console.log(pin);
}

document.getElementById('key-pad').addEventListener('click', function () {

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        //   console.log(number);
    }
    else {

        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }
})
function veryfyPin() {

    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const suceessMessage = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        const suceessMessage = document.getElementById('notify-success');
        suceessMessage.style.display = "block";
        notifyError.style.display = "none";
    }
    else {

        notifyError.style.display = "block";
        suceessMessage.style.display = "none";
    }
}
