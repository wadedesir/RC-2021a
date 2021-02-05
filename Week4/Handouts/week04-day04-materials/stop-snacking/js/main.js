//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function dontSnack(){
  let snacks = document.querySelector('input').value
  for (let i = 1; i <= snacks; i++){
    alert('DONT SNACK!')
  }
}

document.querySelector('#help').addEventListener('click', dontSnack)
