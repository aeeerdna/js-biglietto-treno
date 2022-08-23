const km = prompt('How many kilometers do you want to travel??');
const kmAsNumber = parseInt(km);
console.log('kmAsNumber');
const price = 0.21 * km;

const age = prompt('How old are you?')
const ageAsNumber = parseInt(age);

if (age <= 18) {
    console.log('20% off')
} else {
    console.log('price')
}

if (age >= 65) {
    console.log('40% off')
} else {
    console.log('price')
}
