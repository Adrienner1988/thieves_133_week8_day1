/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
console.log('test')


// Our first TS Code
let age: number = 35;
console.log(age)

// age = '35'- variable can not be reassign the data type, but can the value

age = 20
console.log(age)

let myName = 'Adrienne'
console.log(myName)

let isPrime: boolean = true
// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value
let lastName;
lastName = 'Daniels'
lastName = 30
//let you redefined because you used any on declaration


// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
const fullName = (fname: string, lname: string) =>{
    console.log(fname + lname)
}


// ----- Arrays: Dynamic, you can pass any data type
let numbers: number[] = [1,2,3,4]
let dynamicArray: (string | number | boolean)[] = [14, 'Ronnie', false, 'Adrienne', 99]


// Another huge benefit: Code completion
myName.charAt
age.toString
isPrime.valueOf


// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values
let makeUP: [number, string] = [1, 'mented']

// Code Completion
makeUP.push(4) //push is how you append in JS
console.log(makeUP)


// ----- Enums: Special "Class" that represents a group of constants.
const small: number = 25
const medium: number = 50
const large: number = 75

console.log(small)
console.log(medium)
console.log(large)

// PascalCase "numeric" (Why? Takes up less space/storage. Inside are properties)
enum Size {
    Small = 25,
    Medium = 50,
    Large = 75
}

console.log(Size.Large)

// "string"
enum Family {
    Mom = 'Michelle',
    Dad = 'Charles'
}
console.log(Family.Dad)


// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config
const calcTax = (income: number, taxYear: number):number => {
    if (taxYear < 2024){
        return income * 1.2
    }
    return income * 1.3
}

console.log(calcTax(4000, 2023))

// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/
let person : {
    name: string,
    age: number,
    location?: string,
    isOld: boolean
} = {
    name:'Adrienne',
    age: 35, 
    location: '',
    isOld: false
}

//question mark makes it optional, but has to be assigned the value on declaration