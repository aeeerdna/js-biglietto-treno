const km = prompt('How many kilometers do you want to travel??');
const kmAsNumber = parseInt(km);
console.log(kmAsNumber.toFixed(2));
document.getElementById("km").innerHTML += kmAsNumber.toFixed(2) + 'km';

const price = 0.21 * kmAsNumber;
console.log(price.toFixed(2));
document.getElementById("full_price").innerHTML += price.toFixed(2) + '€';


const age = prompt('How old are you?');
const ageAsNumber = parseInt(age);

if (age <= 18) {
    let discountedPrice = price - (price * 0.2);
    console.log(discountedPrice.toFixed(2));
    document.getElementById("price").innerHTML += discountedPrice.toFixed(2) + '€';
} else if (age >= 65) {
    let discountedPrice = price - (price * 0.4);
    console.log(discountedPrice.toFixed(2));
    document.getElementById("price").innerHTML += discountedPrice.toFixed(2) + '€';
} else {
    console.log(price.toFixed(2));
    document.getElementById("price").innerHTML += price.toFixed(2) + '€';
}





