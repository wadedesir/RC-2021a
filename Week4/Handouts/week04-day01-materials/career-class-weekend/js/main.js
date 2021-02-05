document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === "monday"){
    document.querySelector('#placeToSee').innerText = 'Career Skills Day'
  }
  else if ((day === 'saturday') || (day === 'sunday')){
    document.querySelector('#placeToSee').innerText = 'Its the weekend'
  }
  else{
    document.querySelector('#placeToSee').innerText = 'We have class'
  }


}
