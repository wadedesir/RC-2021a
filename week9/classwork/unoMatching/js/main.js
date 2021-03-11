let divs = document.querySelectorAll('div')
//select all di
divs.forEach( (div) => {
  div.addEventListener('click', flip)
})

let memeCards = []
let lastCard
for (i = 0; i < 6; i++){
  let num = Math.floor(Math.random() * 13)
  num +=1
  while(memeCards.includes(`img/${num}.jpg`)){
    num = Math.floor(Math.random() * 13)
    num +=1
  }
  memeCards.push(`img/${num}.jpg`)
}
console.log(memeCards)

let buffer = []
memeCards = memeCards.reduce( (acc, card) => {
  let rm = [Math.floor(Math.random() * 12)]
  rm.push(Math.floor(Math.random() * 12))
  while ((rm[0] === rm[1]) || (buffer.includes(rm[0]) || buffer.includes(rm[1]) )) {
    rm[0] = Math.floor(Math.random() * 12)
    rm[1] = Math.floor(Math.random() * 12)
  }
  buffer.push(rm[0], rm[1])
  acc[rm[0]] = card
  acc[rm[1]] = card
  return acc
}, [] )

console.log(memeCards);
let domCards = document.querySelectorAll('.cardSet')

domCards.forEach( (card, i) => {
  card.src = memeCards[i]
})

document.querySelectorAll('.cardBack').forEach((item, i) => {
  item.src = `img/backofcard.jpg`
});

function flip(){
  if (this.classList.contains('matched') || this.classList.contains('flip')){
    alert('Card is matched or flipped. Try another!')
  }
  else{
    // console.log(this.querySelector('.cardSet').src);
    (document.querySelectorAll('.flip').length > 1) ? checkMatch(this, lastCard) : this.classList.toggle('flip')
    lastCard = this
  }

  console.log(`clicked ${this}`)
}

function checkMatch(newCard, lastCard){
  console.log(`cards: ${newCard} - ${lastCard}`);
  newCard.classList.toggle('flip')
  let selectedCards = [newCard.querySelector('.cardSet'), lastCard.querySelector('.cardSet')]
  console.log(selectedCards[0].src)
  let match = (selectedCards[0].src === selectedCards[1].src) ? true : false

  if (match){
    selectedCards.forEach( (card) => {
      card.classList.remove('flip')
      card.classList.toggle('match')
    });
    console.log('Matched')
  }
  else{
    newCard.classList.remove('flip')
    lastCard.classList.remove('flip')
    console.log('no match')
  }

  selectedCards = []
}

// memeCards.forEach( (memeLink, i, arr) => {
//
// })
