document.querySelector('#rock').addEventListener('click', function(){roll('rock')})
document.querySelector('#paper').addEventListener('click', function(){roll('paper')})
document.querySelector('#scissors').addEventListener('click', function(){roll('scissors')})
document.querySelector('#lizard').addEventListener('click', function(){roll('lizard')})
document.querySelector('#spock').addEventListener('click', function(){roll('spock')})
// ^^ Event listeners for each option, looking forward to using arrays for things like these in the future. Too lazy now
let finalBlow //Holds the extra adjectives for when the player wins. Spices up game play
let backup1
let backup2
let rst = false
// ^^ These last 3 help in resetting the field


function opponent(){ //Our dummy player. Just randomize values between 0-4 and sets them as options
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
    case 3:
      return 'lizard'
      break;
    case 4:
      return 'spock'
      break;
  }
}

function endPlay(hand, opponentHand, result){ //This function outputs the text the player will see and also assigns colors to the hands

  document.querySelector(`#${hand}`).style.color = 'goldenrod'
  document.querySelector(`#o${opponentHand}`).style.color = 'firebrick'

  if (result === 2){
    document.querySelector('.placeToPutResult').innerText = `It's a TIE! Both you and your opponent picked ${hand}.`
  }
  else if (result === 1){
    document.querySelector('.placeToPutResult').innerText = `You WIN! Your ${hand} ${finalBlow} their ${opponentHand}.`
    }
  else if (result === 0){
    document.querySelector('.placeToPutResult').innerText = `You lost. They picked ${opponentHand}.`
  }


}

function roll(hand){ //Calculates the win situations and passes the info down to the endPlay() function
  let opponentHand = opponent()
  reset()

  switch (hand) {
    case 'rock':
      finalBlow = 'crushes'
      if ((opponentHand === 'scissors') || (opponentHand === 'lizard')){
        endPlay(hand, opponentHand, 1)
      }
      else if (hand === opponentHand){
        endPlay(hand, opponentHand, 2)
      }
      else{
        endPlay(hand, opponentHand, 0)
      }
      break;

    case 'paper':
      finalBlow = (opponentHand === 'rock') ? 'covers' : 'disproves' //I was proud of this one nice and simple
      if ((opponentHand === 'rock') || (opponentHand === 'spock')){
        endPlay(hand, opponentHand, 1)
      }
      else if (hand === opponentHand){
        endPlay(hand, opponentHand, 2)
      }
      else{
        endPlay(hand, opponentHand, 0)
      }
      break;

    case 'scissors':
      finalBlow = (opponentHand === 'paper') ? 'cuts' : 'decapitates'
      if ((opponentHand === 'paper') || (opponentHand === 'lizard')){
        endPlay(hand, opponentHand, 1)
      }
      else if (hand === opponentHand){
        endPlay(hand, opponentHand, 2)
      }
      else{
        endPlay(hand, opponentHand, 0)
      }
      break;

    case 'lizard':
      finalBlow = (opponentHand === 'spock') ? 'poisons' : 'eats'
      if ((opponentHand === 'spock') || (opponentHand === 'paper')){
        endPlay(hand, opponentHand, 1)
      }
      else if (hand === opponentHand){
        endPlay(hand, opponentHand, 2)
      }
      else{
        endPlay(hand, opponentHand, 0)
      }
      break;

    case 'spock':
      finalBlow = (opponentHand === 'scissors') ? 'smashes' : 'vaporizes'
      if ((opponentHand === 'scissors') || (opponentHand === 'rock')){
        endPlay(hand, opponentHand, 1)
      }
      else if (hand === opponentHand){
        endPlay(hand, opponentHand, 2)
      }
      else{
        endPlay(hand, opponentHand, 0)
      }
      break;

  }


}

function reset(){ //Change all the hand colors to black at the beginning of each turn. Things look a little bit nasty otherwise
    document.querySelector(`#orock`).style.color = 'black'
    document.querySelector(`#opaper`).style.color = 'black'
    document.querySelector(`#oscissors`).style.color = 'black'
    document.querySelector(`#olizard`).style.color = 'black'
    document.querySelector(`#ospock`).style.color = 'black'
    document.querySelector(`#rock`).style.color = 'black'
    document.querySelector(`#paper`).style.color = 'black'
    document.querySelector(`#scissors`).style.color = 'black'
    document.querySelector(`#lizard`).style.color = 'black'
    document.querySelector(`#spock`).style.color = 'black'
}
