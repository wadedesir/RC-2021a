//Rotate on click
document.querySelector('#boxLeft').addEventListener('click', () => rotate('#boxLeft'))
document.querySelector('#boxMid').addEventListener('click', () => rotate('#boxMid'))
document.querySelector('#boxRight').addEventListener('click', () => rotate('#boxRight'))


let rotationAmount = 0
let rotations = {'#boxLeft' : 0, '#boxMid' : 0, '#boxRight' : 0}
let target
let move = 0

function rotate(box){
  target = document.querySelector(box)
  let rbs = document.querySelectorAll('input[name="choice"]');
// handle click button


  if (rbs[0].checked){
    target.style.borderRadius = '0%'
    // mode = rbs[0].value
    rotationAmount += 45
    // alert(rotations[box])
    // *test* console.log(rotationAmount)

    if (rotations[box] === 0){
      document.querySelector('#boxMid').style.backgroundColor = 'transparent'
      document.querySelector('#boxRight').style.backgroundColor = 'transparent'
      document.querySelector('#boxLeft').style.backgroundColor = 'transparent'
    }

    if ((box === '#boxLeft') && (rotations[box] === 2)){
      rotations[box] = 0
      document.querySelector('#boxRight').style.backgroundColor = 'red'
      document.querySelector('#boxMid').style.backgroundColor = 'red'
    }
    else if ((box === '#boxMid') && (rotations[box] === 2)){
      rotations[box] = 0
      document.querySelector('#boxRight').style.backgroundColor = 'black'
      document.querySelector('#boxLeft').style.backgroundColor = 'black'
    }
    else if ((box === '#boxRight') && (rotations[box] === 2)){
      rotations[box] = 0
      document.querySelector('#boxLeft').style.backgroundColor = 'green'
      document.querySelector('#boxMid').style.backgroundColor = 'green'
    }
    else{
      rotations[box] += 1
    }
    target.style.transform = `rotate(${rotationAmount}deg)`
    if (rotationAmount === 360) { rotationAmount = 0}
  }
  else if(rbs[1].checked){
    transform(box)
  }

}


function transform(box){ //Transform to circle and move -> on click
target = document.querySelector(box)
console.log("Mode2");
target.style.borderRadius = '50%'
move = move + 30
target.style.left = `${move}px`
}
