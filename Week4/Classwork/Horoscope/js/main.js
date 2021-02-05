const aquarius = document.querySelector('#aquarius')
const aries = document.querySelector('#aries')
const cancer = document.querySelector('#cancer')
const capricorn = document.querySelector('#capricorn')
const gemini = document.querySelector('#gemini')
const leo = document.querySelector('#leo')
const libra = document.querySelector('#libra')
const pisces = document.querySelector('#pisces')
const saggitarius = document.querySelector('#saggitarius')
const scorpio = document.querySelector('#scorpio')
const taurus = document.querySelector('#taurus')
const virgo = document.querySelector('#virgo')
const main = document.querySelector('#main')
let lastHoroscope = document.querySelector('#main')
let reset = false
let lastParagraph

function checkValues(){
  let day = document.querySelector('#day').value

  if (isNaN(day)){
    alert('input is a not number')
  }
  else if ((day >= 1) && (day <= 31)){
    horoscope(day)
  }
  else {
    alert('Please enter a valid day')
  }
}

function horoscope(day){
  let month = document.querySelector('#month').value

  if (reset === true){
    lastHoroscope.style.display = 'none'
    document.querySelector(lastParagraph).style.display = 'none'
  }

  if (((month === 'January') && (day >= 20)) || ((month === 'February') && (day <= 18))){
    document.querySelector('h1').innerText = 'Aquarius'
    aquarius.style.display = 'flex'
    lastHoroscope = aquarius
    document.querySelector('.aquarius').style.display = 'flex'
    lastParagraph = '.aquarius'
  }
  else if (((month === 'February') && (day >= 19)) || ((month === 'March') && (day <= 19))){
    document.querySelector('h1').innerText = 'Pisces'
    pisces.style.display = 'flex'
    lastHoroscope = pisces
    document.querySelector('.pisces').style.display = 'flex'
    lastParagraph = '.pisces'
  }
  else if (((month === 'March') && (day >= 20)) || ((month === 'April') && (day <= 18))){
    document.querySelector('h1').innerText = 'Aries'
    aries.style.display = 'flex'
    lastHoroscope = aries
    document.querySelector('.aries').style.display = 'flex'
    lastParagraph = '.aries'
  }
  else if (((month === 'April') && (day >= 19)) || ((month === 'May') && (day <= 20))){
    document.querySelector('h1').innerText = 'Taurus'
    taurus.style.display = 'flex'
    lastHoroscope = taurus
    document.querySelector('.taurus').style.display = 'flex'
    lastParagraph = '.taurus'
  }
  else if (((month === 'May') && (day >= 21)) || ((month === 'June') && (day <= 20))){
    document.querySelector('h1').innerText = 'Gemini'
    gemini.style.display = 'flex'
    lastHoroscope = gemini
    document.querySelector('.gemini').style.display = 'flex'
    lastParagraph = '.gemini'
  }

  main.style.display = 'flex'
  reset = true
}

document.querySelector('#check').addEventListener('click', checkValues)
// document.querySelector('').style.display = 'none'
