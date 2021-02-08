
let total = 0
document.querySelector('.equal').addEventListener('click', calculate)

function calculate(){
  const op = document.querySelector('.operator').value
  const val1 = Number(document.querySelector('#val1').value)
  const val2 = Number(document.querySelector('#val2').value)

  if (isNaN(val1) || isNaN(val2)){
    alert('Please input valid Numbers')
  }
  else if (op === 'Plus'){
    total = val1 + val2
  }
  else if (op === 'Minus'){
    total = val1 - val2
  }
  else if (op === 'Multiply'){
    total = val1 * val2
  }
  else if (op === 'Divide'){
    total = val1 / val2
  }
  document.querySelector('.placeToPutResult').innerText = total
}
