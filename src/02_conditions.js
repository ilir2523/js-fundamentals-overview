/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
function getShorterString(argument1, argument2) {
    if (argument1.length === argument2.length) return "They're the same length!"
    else if (argument1.length < argument2.length) return argument1
    else if (argument1.length > argument2.length) return argument2
}
// 1.1 Call the function with "Bob" and "Steven" as arguments.
getShorterString("Bob", "Steven")
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
getShorterString("Henrica", "Mark")
// 1.3. Call the function with any arguments we like to test the remaining use case.
getShorterString("Bob", "Pop")

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

function checkDirtyBirds(birds) {
    let nastyBirds = 0;
    for (const bird of birds) {
        if (bird === 'pigeon') nastyBirds += 1
        else if (bird === 'seagull') nastyBirds += 1
        else if (bird === 'bin chicken') nastyBirds += 1
    }

    if (nastyBirds === 0) return "Birds are cute!"
    else if (nastyBirds === 1) return "Eww"
    else if (nastyBirds === 2) return "Oh god"
    else if (nastyBirds === 3) return "Where the hell am I?"
}

// 2.1 Test all the scenarios by calling the function with different arguments.
let birds = ['tuna']
console.log(checkDirtyBirds(birds))

birds = ['tuna', 'pigeon']
console.log(checkDirtyBirds(birds))

birds = ['tuna', 'seagull', 'bin chicken']
console.log(checkDirtyBirds(birds))

birds = ['tuna', 'pigeon', 'seagull', 'bin chicken']
console.log(checkDirtyBirds(birds))