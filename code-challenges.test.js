// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

//I'll write out a jest test ensuring the following 4 methods are in place
//describe,it,expect,toEqual
//describe will ask for a function called multBy3
//it will include what is supposed to happen in the code
//expect will include part of future conditional statements giving desired result
//toEqual will have the desired result
describe("multBy3", () =>
  it ("multBy3 takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
    expect (multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
  })
  )
//Failed ReferenceError: multBy3 is not defined
//create function with multBy3 being the name of said function
const multBy3 = (numbersArray1) => {
  return numbersArray1.map(value => value * 3)
}//Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

describe("multBy32", () =>
  it ("multBy32 takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
    expect (multBy32(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
  )

  //Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
//Failed ReferenceError: multBy32 is not defined
//create function with multBy32 being the name of said function

const multBy32 = (numbersArray2) => {
  return numbersArray2.map(value => value * 3)
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total





// b) Create the function that makes the test pass.
//I guess I already did that above. moving on...


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three" 
const num3 = -7
// Expected output: "-7 is not divisible by three"

//test must include the following 4 describe,it,expect,toEqual
describe("evenlyDivBy3", () => {
  it ("returns whether a number is evenly divisble by three or not", () => {
  expect(evenlyDivBy3(num1)).toEqual("15 is divisible by three")
  expect(evenlyDivBy3(num2)).toEqual("0 is divisible by three")
  expect(evenlyDivBy3(num3)).toEqual("-7 is not divisible by three")
  })
})
//Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total


// b) Create the function that makes the test pass.
var evenlyDivBy3 = (numz) => {
  if(numz % 3 === 0){
    return `${numz} is divisible by three`
  }else if(numz % 3 !== 0){
    return `${numz} is not divisible by three`
  }
} 
evenlyDivBy3(num1)
evenlyDivBy3(num2)
evenlyDivBy3(num3)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
//adding the 2nd and 3rd expects caust issues
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// unsure how to add on more expect without causing issues reviewing jest off syllabus
// yeah idk I made changes to the evenlyDivBy3 to address else if and it gives 
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//I'll write out a jest test ensuring the following 4 methods are in place
//describe,it,expect,toEqual
//describe will ask for a function called arrayCap
//it will include what is supposed to happen in the code "Return values in array capatilized"
//expect will include part of future conditional statements giving desired result
//toEqual will have the desired result ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
describe("arrayCap", () =>
  it("returns values in array capatilized", () => {
    expect (arrayCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  })
)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 3 passed, 4 total
//set a value for the input as arrayCap1
//for the length of the array push the index value array into new array called currentWord
//need to make the current array into a split array of the words individual letters

// b) Create the function that makes the test pass.
//no idea used reference higher-order-functions and it had this code writen out for a fruit array
const arrayCap = (array) => {
  let eachItem = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
  return eachItem
}
console.log(arrayCap(randomNouns1))

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
//I'll write out a jest test ensuring the following 4 methods are in place
//describe,it,expect,toEqual
//describe will ask for a function called firstVowel
// it will find firstindex of lowerVowel = ["a","e","i","o","u"]
//expect will call uppon firstVowel.firstindexof lowerVowel return that number
const lowerVowel = ["a","e","i","o","u"]
describe("firstVowel", () =>
  it("will return the first index of a vowel", () =>{
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  }))

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

let firstVowel = (string) => {
  let indexOfVowels = []
  for(let i=0; i<lowerVowel.length; i++){  
    if(string.indexOf(lowerVowel[i]) !== -1){
      indexOfVowels.push(string.indexOf(lowerVowel[i]))
    }
  }
  return indexOfVowels.sort()[0]
}
console.log (firstVowel(vowelTester1))
console.log (firstVowel(vowelTester2))
console.log (firstVowel(vowelTester3))

// firstVowel(vowelTester1)
// firstVowel(vowelTester2)