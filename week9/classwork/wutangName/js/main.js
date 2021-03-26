document.querySelector('button').addEventListener('click', convert)


//array of wutang names
let firstNameArr = ['Dash', 'bofa', 'wade', 'dash', 'brian', 'joe', 'julie', 'Asianna', 'Tanecia', 'Ziya', 'bofa', 'name2', 'name3', 'name4', 'name5']
let lastNameArr = ['deeznuts', 'joemamma', 'Robert', 'deeznuts', 'Name1', 'name2']

// We wanna grab the names two different posibilities
function mapCC( x,  in_min,  in_max,  out_min,  out_max){
  return Math.floor(x - in_min) * Math.floor(out_max - out_min) / Math.floor(in_max - in_min) + Math.floor(out_min);
}

function grabValues(){
  //let multiplier = firstNameArr.length / 3
  let q1 = Number(document.querySelector('.q1').value) //* multiplier
  let q2 = Number(document.querySelector('.q2').value) //* multiplier
  let q3 = Number(document.querySelector('.q3').value) //* multiplier // max 3 min: 0;
  let sum1 = (q1 + q2 + q3)
  alert(sum1)
  sum1 = Math.floor(mapCC(sum1, 6, 15, 0, 10))
  alert(sum1)
  let q4 = Number(document.querySelector('.q4').value)
  let q5 = Number(document.querySelector('.q5').value) //max 2
  let sum2 = (q4 + q5) % 2

  return [sum1, sum2]
}

//function to convert choices to a value that we can use in an array
function convert(){
  let valArr = grabValues()
  // console.log(valArr[0]);
  // console.log(valArr[1]);
  // let firstName = firstNameArr[valArr[0]]
  // let lastName = lastNameArr[valArr[1]]

  // alert(`${firstName} ${lastName}`)
}
