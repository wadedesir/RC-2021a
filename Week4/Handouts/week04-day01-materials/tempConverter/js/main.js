document.querySelector('#convert').addEventListener('click', convert)

function convert() {

  const unit = document.querySelector('#unit').value
  const temp = document.querySelector('#inputTemp').value
  let f
  let c
  let k

  if (isNaN(temp)){
    document.querySelector('#placeToSee').innerText = `${temp} is not a number. Please input a number.`
  }
  else if (unit === "Celsius"){
    c = Number(temp)
    k = c + 273.15
    f = 32 + (c * 1.8)

    document.querySelector('#placeToSee').innerText = `The Temperature ${c} Degrees Celsius is also ${f} Degrees Farenheight and ${k} Degrees Kelvin`
  }
  else if (unit === 'Kelvin'){
    k = Number(temp)
    c = k - 273.15
    f = 32 + (c * 1.8)
    document.querySelector('#placeToSee').innerText = `The Temperature ${k} Degrees Kelvin is also ${f} Degrees Farenheight and ${c} Degrees Celsius`
  }
  else{
    f = Number(temp)
    c = (f - 32) * 5 / 9
    k = c + 273.15
    document.querySelector('#placeToSee').innerText = `The Temperature ${f} Degrees Farenheight is also ${c} Degrees Celsius and ${k} Degrees Kelvin`
  }
}
