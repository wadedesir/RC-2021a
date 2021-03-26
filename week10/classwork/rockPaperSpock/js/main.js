document.querySelector('#check').addEventListener('click', start)
let playerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  //gets value from input

function clear(){
  playerChoices.forEach((choice) => {
    document.querySelector(`.${choice}`).style.color = 'black';
    document.querySelector(`.${choice}Bot`).style.color = 'black';
  });
}

function start(){
  clear()
  let content = document.querySelector('.userChoice').value
  console.log(content);
  document.querySelector(`.${content}`).style.color = 'green'
  // 'spock'
  console.log(content);
  fetch(`/api?playerChoice=${content}`) //instead of palindrome pass in rock paper scissor or spock variable.
  .then(response => response.json())
  .then((data) => {
    document.querySelector(`.${data.opponentChoice}Bot`).style.color = 'red'
    document.querySelector('h2').textContent = data.information // return data.information -- Who wins.
    // console.log(data);
});
}


function winInformation(){
  // if ( spock beats scissors){
  //   dociment.qe... `Scissors WIN`
  // }
}
// function aiShuffle(){
//   let shuffleTimer
//   while(waitPlayer){
//
//   }
// }
