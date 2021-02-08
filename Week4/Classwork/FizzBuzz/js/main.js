document.querySelector('.start').addEventListener('click', fizzbuzz)
let fizzy //Setting to User input
let output
let count
let firstRun = true //Values to make it easier to manage a second run
let confirm = false
let reset = false
let timer //Holds timeOut so that it can be reset

function fizzbuzz(){
  fizzy = Number(document.querySelector('.data').value)
  if (!firstRun){ confirm = true }
  if (isNaN(fizzy)){ //Checks for wrong inputs
    alert('Please input a valid number')
  }
  else{
    for (let count = 1; count <= fizzy; count++) { //For loop counting to user input
      reset = runTimeOut(count) //Making it easier to manage second runs through
      if (reset) {
        reset = false
        confirm = false
        firstRun = true
        clearTimeout(timer)
        break;
      }
    }
  }

}

function runTimeOut(count){ //Separate function neccesarry so that the timer actually runs and updates correcly
  firstRun = false
  let ret
  timer = setTimeout(function () { //Anynoymous function for the timer. Will not run correctly without
    if (confirm){
      reset = true; return true
    }
    else if ( ((count % 3) === 0) && ((count % 5) === 0)){
      output = 'FizzBuzz'
    }
    else if ((count % 3) === 0){
      output = 'Fizz'
    }
    else if ((count % 5) === 0){
      output = 'Buzz'
    }
    else{
      output = count
    }
    document.querySelector('.one').innerText = output
  }, 1000 * count)
  if (confirm){ return true}
}
