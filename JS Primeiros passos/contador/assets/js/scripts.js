var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber =0
function increment(){
    if (currentNumber == 9){
        currentNumber = 0;
    }
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}
function decrement(){
    if (currentNumber == -9){
        currentNumber = 0;
    }
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}