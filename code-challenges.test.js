// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

//I'll use the describe method that calls on any array given
//Use the .map to process all numbers in the array
//I'll use the * to multiply the numbers by 3
//return the new values in an array

// describe("arrayMul3", (array) => {
//   EnteredInput: [6, 7, 8, 9, 10]
//   ExpectedOutput: [18, 21, 24, 27, 30]
//   it(array.map(value => value * 3),
//     expect(arrayMul3(array)).toEqual(ExpectedOutput)
//   )
// })

// let arrayMul3 = numbersArray1.map(value => value * 3)
// console.log(testA1)

// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
const numbersArray2 = [24, 27, 30, 33, 36]

describe("multBy3",() => {
  it("takes in an array of numbers and returns an array with all the numbers multipled by 3.",() => {
    expect (multBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect (multBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})





// b) Create the function that makes the test pass.

var multBy3 = (numbersArray1) => {
  return numbersArray1.map(value => value * 3)
}
var multBy3 = (numbersArray2) => {
return numbersArray2.map(value => value * 3)
}


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

describe("DivBy3",() => {
  it("takes in a number and returns if the number is evenly divisble by three or not.",() => {
       const numberEr = 6
    expect if((divBy3(numberEr)) % 3 === 0){
      return "number is evenly divisible by three"
    }else{ 
      return "number is not evenly divisible by three"
    }
  })
})

var DivBy3 = () => {
  if(numberEr % 3 === 0){
    return "number is evenly divisible by three"
  }else{ 
    return "number is not evenly divisible by three"

  }
}

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.










