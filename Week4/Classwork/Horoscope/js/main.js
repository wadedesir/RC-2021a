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
// So many variables that it hurts to look at man :(

function checkValues(){ // First function thatt is called. Just does some verification and then calls the mains
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

function horoscope(day){ //So many if statements but it works. actually really liked how it came out. Definitly can be better tho
  let month = document.querySelector('#month').value

  if (reset === true){ //Makes sure things are removed before every new run.
    lastHoroscope.style.display = 'none'
    document.querySelector(lastParagraph).style.display = 'none'
  }

  if (((month === 'January') && (day >= 20)) || ((month === 'February') && (day <= 18))){
    document.querySelector('h1').innerText = 'Aquarius'
    aquarius.style.display = 'flex' //Show s the image
    lastHoroscope = aquarius //Sets it to lastHoroscope so that it can be toggle off later on
    document.querySelector('.aquarius').style.display = 'flex' //Makes this paragraph visible
    lastParagraph = '.aquarius' //Also stores the value for later use
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
  else if (((month === 'June') && (day >= 21)) || ((month === 'July') && (day <= 22))){
    document.querySelector('h1').innerText = 'Cancer'
    cancer.style.display = 'flex'
    lastHoroscope = cancer
    document.querySelector('.cancer').style.display = 'flex'
    lastParagraph = '.cancer'
  }
  else if (((month === 'July') && (day >= 23)) || ((month === 'August') && (day <= 22))){
    document.querySelector('h1').innerText = 'Leo'
    leo.style.display = 'flex'
    lastHoroscope = leo
    document.querySelector('.leo').style.display = 'flex'
    lastParagraph = '.leo'
  }
  else if (((month === 'August') && (day >= 23)) || ((month === 'September') && (day <= 22))){
    document.querySelector('h1').innerText = 'Virgo'
    virgo.style.display = 'flex'
    lastHoroscope = virgo
    document.querySelector('.virgo').style.display = 'flex'
    lastParagraph = '.virgo'
  }
  else if (((month === 'September') && (day >= 23)) || ((month === 'October') && (day <= 22))){
    document.querySelector('h1').innerText = 'Libra'
    libra.style.display = 'flex'
    lastHoroscope = libra
    document.querySelector('.libra').style.display = 'flex'
    lastParagraph = '.libra'
  }
  else if (((month === 'October') && (day >= 23)) || ((month === 'November') && (day <= 21))){
    document.querySelector('h1').innerText = 'Scorpio'
    scorpio.style.display = 'flex'
    lastHoroscope = scorpio
    document.querySelector('.scorpio').style.display = 'flex'
    lastParagraph = '.scorpio'
  }
  else if (((month === 'November') && (day >= 22)) || ((month === 'December') && (day <= 21))){
    document.querySelector('h1').innerText = 'Saggitarius'
    saggitarius.style.display = 'flex'
    lastHoroscope = saggitarius
    document.querySelector('.saggitarius').style.display = 'flex'
    lastParagraph = '.saggitarius'
  }
  else if (((month === 'December') && (day >= 22)) || ((month === 'January') && (day <= 19))){
    document.querySelector('h1').innerText = 'Capricorn'
    capricorn.style.display = 'flex'
    lastHoroscope = capricorn
    document.querySelector('.capricorn').style.display = 'flex'
    lastParagraph = '.capricorn'
  }
  main.style.display = 'flex'
  reset = true
}

document.querySelector('#check').addEventListener('click', checkValues) //gets the ball rolling
