document.querySelector('.start').addEventListener('click', fizzbuzz)
let fizzy
let output
let count
let firstRun = true
let confirm = false
let reset = false
let timer

function fizzbuzz(){
  fizzy = Number(document.querySelector('.data').value)
  if (!firstRun){ confirm = true }
  if (isNaN(fizzy)){
    alert('Please input a valid number')
  }
  else{
    for (let count = 1; count <= fizzy; count++) {
      reset = runTimeOut(count)
      if (reset) {
        alert('clear')
        reset = false
        confirm = false
        firstRun = true
        clearTimeout(timer)
        break;
      }
    }
  }

}

function runTimeOut(count){
  firstRun = false
  let ret
  timer = setTimeout(function () {
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
