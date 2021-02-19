/*
Grasshopper gradebook
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
function getGrade (s1, s2, s3) {
  let mean = (s1 + s2 + s3)/3

  switch(true){

      case (mean >= 90):
        return 'A'
      break

      case (mean >= 80):
        return 'B'
      break

      case (mean >= 70):
        return 'C'
      break

      case (mean >= 60):
        return 'D'
      break

      case (mean < 60):
        return 'F'
      break
  }
}

/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/
function firstNonConsecutive (arr) {
  let base = arr[0]
  for (i = 0; i <= arr.length; i++){
    if ((arr[i] - base) > 0){
      return arr[i]
    }
    else if (i === arr.length){
      return null
    }
    else{
      base += 1
    }
  }
}

/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/
function getAverage(marks){

  let total = 0;
  for(i = 0; i < marks.length; i++){
    total += marks[i];
  }

  return Math.floor(total / marks.length);
}

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)
*/
function hero(bullets, dragons){
//Get Coding!
  if ((dragons * 2) <= bullets){return true} else return false
  //takes two bullets to kill so multiply each by two and check if  num of bullets is enough or more
}

/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/
const quarterOf = (month) => {
  // Your code here
  switch(true){
    case month >= 10:
      return 4
    break
    case month >= 7:
      return 3
    break
    case month >= 4:
      return 2
    break
    case month >= 1:
      return 1
    break
  }
