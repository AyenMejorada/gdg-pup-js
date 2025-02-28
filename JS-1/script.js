let name = "Ayen Mejorada";
let age = 18;
let isStudent = true;
let hobbies = ["drawing", "exercising", "coding"];

console.log("Type of name:", typeof name, "| Value:", name);
console.log("Type of age:", typeof age, "| Value:", age);
console.log("Type of isStudent:", typeof isStudent, "| Value:", isStudent);
console.log("Type of hobbies:", typeof hobbies, "| Value:", hobbies);

const pi = 3.14159;
const birthYear = 2006;
const isEmployed = false;
const favoriteMovies = ["Interstellar", "Inside Out", "The Darkest Minds"];

console.log("Type of pi:", typeof pi, "| Value:", pi);
console.log("Type of birthYear:", typeof birthYear, "| Value:", birthYear);
console.log("Type of isEmployed:", typeof isEmployed, "| Value:", isEmployed);
console.log("Type of favoriteMovies", typeof favoriteMovies, "| Value:", favoriteMovies);

try {
    pi = 3.14;
} catch (error) {
    console.log("Error: Cannot reassign a constant variable.");
}

var city = "Muntinlupa City";
var temperature = 26;
var hasPets = true;
var colors = ["pink", "black", "silver"];

console.log("Type of city:", typeof city, "| Value:", city);
console.log("Type of temperature:", typeof temperature, "| Value:", temperature);
console.log("Type of hasPets:", typeof hasPets, "| Value:", hasPets);
console.log("Type of colors:", typeof colors, "| Value:", colors);

console.log("Hoisted variable before declaration:", hoistedVar); // Undefined due to hoisting
var hoistedVar = "I'm hoisted!";
console.log("Hoisted variable after declaration:", hoistedVar);
