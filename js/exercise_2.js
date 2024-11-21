// Excercise 2:
/*Make a script that asks for 3 ages and 3 names on the keyboard and indicates the 
name of the eldest.*/
let name1 = prompt("Enter the first name: ")
let age1 = prompt("Enter the first age: ")

let name2 = prompt("Enter the second name: ")
let age2 = prompt("Enter the second age: ")

let name3 = prompt("Enter the third name: ")
let age3 = prompt("Enter the third age: ")

let eldestName
if (age1 >= age2 && age1 >= age3) {
    eldestName = name1
} else if (age2 >= age1 && age2 >= age3) {
    eldestName = name2
} else {
    eldestName = name3
}

console.log(`The eldest person is: ${eldestName}`)