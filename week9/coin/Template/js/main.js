document.querySelector('.flipB').addEventListener('click', flipCoin)
document.querySelector('.resetB').addEventListener('click', reset)
let headsCounter = document.querySelector('.h span')
let tailsCounter= document.querySelector('.t span')
let hr=document.querySelector('#coin')
let front=0
let back=0

function flipCoin(){
  // let probability = Math.floor(Math.random()*2)+1
  if (hr.classList.contains('animate-heads')){
    start()
  }else if (hr.classList.contains('animate-tails')){
    start()
  // do tails!!!!!!!!!
  }else{
    start()
  }
}

function start(){
  let probability = Math.floor(Math.random()*2)+1

  if (probability%2){
    front++
    flip('Heads')
    console.log(coin);
    // coin.setAttribute('class', 'animate-' + 'heads');
  }else{
    // coin.setAttribute('class', 'animate-' + 'tails');
    back++
    flip('tails')
  }
}
function reset(){
  if (hr.classList.contains('animate-heads')){
    hr.classList.remove("animate-heads")

  }else if (hr.classList.contains('animate-tails')){
    hr.classList.remove("animate-tails")
  }
}
function flip(side){
  headsCounter.innerText=front
  tailsCounter.innerText=back
}
