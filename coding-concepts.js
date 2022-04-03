// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer:It will have each character in seperate index of an array 
// b) Verify and explain: correct, each individual character to include space is in its own index of an array


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:Hello, Learn Student
// b) Verify and explain: incorrect, it didnt have a return so the function dosn't return anything 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: correct, the map function goes to each index and multiplies it by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: correct, the .filter dosn't keep any values that are not true after passing the evaluation at the end


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:JavaScript
// b) Verify and explain: correct, the function follows the path down to the answer of 0 index of languages in myCodingSkills


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:    
    this.student = "George",
    this.cohort = "Bravo",
    this.year = 2022
// b) Verify and explain: correct, the new class has the george take place of name where it was left to autofill with the value given
