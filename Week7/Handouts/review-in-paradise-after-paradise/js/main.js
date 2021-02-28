// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function arraytest(arr){
  if (arr[0] > arr[arr.length - 1]){
    alert('hi')
  }
  else{
    alert('bye')
  }
}

arraytest([1,  5])
