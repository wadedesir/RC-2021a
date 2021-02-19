let pic = document.querySelector('img')
let verticalStep = 0
let horizontalStep = 0
document.addEventListener('keydown', spaceShip) //listens for user to press something on their keyboard

function spaceShip(keyboard){//moves picture on page.

  switch (keyboard.key) {
    case 'ArrowUp':
      verticalStep -= 10
      pic.style.top = Number(verticalStep) + 'px' //uses relative positioning so its easier to apply transformations
      break;
    case 'ArrowDown':
      verticalStep += 10
      pic.style.top = Number(verticalStep) + 'px'
      break;
    case 'ArrowLeft':
      horizontalStep -= 10
      pic.style.left = Number(horizontalStep) + 'px'
      break;
    case 'ArrowRight':
      horizontalStep += 10
      pic.style.left = Number(horizontalStep) + 'px'
      break;

  }
}
