let total = 0

document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', savanna)
document.querySelector('#ftfy').addEventListener('click', yessir)
document.querySelector('#cantThinkOfAnything').addEventListener('click', idk)
document.querySelector('#pumpkin').addEventListener('click', reset)
document.querySelector("#eggs").addEventListener('click', chickens)

function reset(){
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}
function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function savanna() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerText = total
}

function yessir(){
  total = total + 50
  document.querySelector('#placeToPutResult').innerText = total
}
function idk(){
  total = total - 2
  document.querySelector('#placeToPutResult').innerText = total
}

function chickens(){
  total = total - 12
  document.querySelector('#placeToPutResult').innerText = total
}
