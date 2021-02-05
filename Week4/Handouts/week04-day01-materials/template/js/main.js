// Variables
// Create a variable, reassign the value, add the value to the dom
// Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication
// Functions
// Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value
// Create a function takes in two arguments. Create a function that takes in one argument and alerts that value. Call the second function with an argument that is the sum from the original two argument function.
// Conditionals
// Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice
// Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers.

let v = 10

v = 'initial Variable'

document.querySelector("#variableOne").innerText = v

let multiply = 5

multiply = multiply * multiply

document.querySelector('#num').innerText = multiply

function convert(temp){
  console.log((temp - 32) * 1.8);
}
convert(32)

function two(x, y){
  function noise(){
    alert(x)
  }
  noise()
  let z = x + y
  function zz(z){
    alert(z)
  }
  zz()
}
two(5, 6)

function rand(){
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      alert('rock')
      break;
    case 1:
      alert('paper')
      break;
    case 2:
      alert('scissors')
      break;
    case 3:
      alert('lizard')
      break;
    case 4:
      alert('spock')
      break;
  }
}

rand()

function divisible(n1, n2){
  if ((n2 % n1) !== 2){
    alert(`sum is ${ n2 + n1}`)
  }else if((n2 % n1) === 2){
    alert(n2 / n1)
  }
}

divisible(9, 3)

divisible(9, 2)


let newv = 20

newv -= 10

console.log(newv)

let askV = prompt('Give me a numbers')

askV += 25

h1V = document.querySelector('h1')

document.querySelector('h2').addEventListener('click', logit)

function logit(){
  console.log(askV + newv);
}
