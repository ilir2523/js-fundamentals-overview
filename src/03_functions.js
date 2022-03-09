/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
function getMyName() {
    return 'Ilir'
}
// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.
function add(a, b) {
    return a + b
}
// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"

function subtractWithCheck(a, b) {
    if (typeof a === "number" && typeof b === "number") return a - b
    else return "Yo dawg you can't subtract us!"
}

// 4. now call the functions with some arguments of your choice.
// 4.1 assign results to variables.
const myName = getMyName()
const sum = add(1, 2)
const difference = subtractWithCheck(5, 3)
// 4.2 print the results to the console.
console.log(myName)
console.log(sum)
console.log(difference)

// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
function getAge(person) {
    let today = new Date();
    let currentYear = today.getFullYear()
    return `${person.name} is ${(currentYear - person.bornIn) - 1}`
}
// 5.1 Call the function with a person argument of your choosing.
const person = {
    id: 1,
    name: 'Ilir',
    bornIn: 1999
}
console.log(getAge(person))

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
function getGreet(shouldCapitalise) {
    if (shouldCapitalise) {
        return function greet(shouldCapitalise) {
            return `HELLO ${shouldCapitalise.toUpperCase()}`
        }
    }
}

// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it
const greetCapitalised = getGreet(true);
console.log(greetCapitalised("Ilir"))