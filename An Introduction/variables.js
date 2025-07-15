// Tasks

// Working with variables

let admin, name;
name = "Akash";
admin = name;
console.log(admin); // John

// Giving the right name
// Create a variable with the name of our planet. How would you name such a variable?
let ourPlanetName = "Earth";
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUserName = "Akash";

const BIRTHDAY = "26.09.2001"; // constant, so uppercase is correct by convention
const age = getAge(BIRTHDAY); // make age uppercase? no
console.log(age); // will log the correct age

/*
function getAge(birthdayStr) {
  const [day, month, year] = birthdayStr.split('.').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // If birthday hasn't occurred yet this year, subtract 1
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}
*/


/*
function getAge(birthdayStr) {
  const [day, month, year] = birthdayStr.split('.').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
*/

 
