let string = 'leon noel'

let reversedStr = string.split('').reverse().join('')
if(reversedStr === string){
  console.log(`${string} is palindrome`)
}
else {
  console.log('is not palindrome')
}
