// *Variables*
// Create a variable and console log the value
let x = 10
console.log(x)
// Create a variable, add 10 to it, and alert the value
let y = 5
y = y + x
alert(y)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(n1, n2, n3, n4){
  alert(n4 - n3 -n2 - n1)
}
sub(5, 100, 50, 1000)
// Create a function that divides one number by another and returns the remainder
function mod(n1, n2){
 return n1 % n2
}
console.log(mod(50, 6))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertIfJumanji(n1, n2){
  if ((n1 + n2) > 50){
    alert('Jumanji!')
  }
}
alertIfJumanji(50, 10)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3){
  let result = n1 * n2 * n3
  if ((result % 3) === 0){
    alert('ZEBRA!')
  }
}
zebra(3, 3, 3)

run = true
spin = 0

while (run){
let ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
  `Carousel has run a total of ${spin} times. Press OK to spin and cancel to stop`,
  function() {
    running = prompt('How many times would you like to spin the carousel?')
    alert("Spinning Carousel...")
},
  function() {
    run = false
    alert("Carousel has stopped running");
  }
  )
  if (run){
    for (let i = 1; i <= running; i++){
      alert(`Carousel spun ${i} time(s)`)
      spin += 1
    }
}
}
num = prompt('Enter a number and I will tell you wether the 10 numbers after it are even or odd')
for (let i = num; i <= (Number(num) + 10); i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
  else{
    console.log(`${i} is odd`);
  }
}
