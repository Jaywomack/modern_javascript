/***
 *
 *STRING METHODS
 */
// const firstName = 'Jared';
// const lastName = 'Womack';
// const str = 'Hello there my name is Jared';
// const tags = 'web design, photography, design';

// val = firstName + lastName;

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // By index, 0 based
// val = firstName[0];

// // indexOf()
// val = firstName.indexOf('J');

// // lastIndexOf()
// val = firstName.lastIndexOf('d');

// // Char at
// val = lastName.charAt('2'); // Will return -1 if not present

// // get last char at
// val = firstName.charAt(firstName.length - 1);

// // substring
// val = firstName.substring(0, 3);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3); // Will take the last three of the string

// //split()
// val = str.split(' ');
// val = tags.split(',');

// //replace()
// val = str.replace('Jared', 'Jay');

// // includes()
// val = str.includes('Hello');

// console.log(val);

/***
 *
 * TEMPLATE LITERALS
 */
const name = 'Jared';
const age = 35;
const job = 'Web Developer';
const city = 'Spokane';
let html;

html = `<ul style = 'list-style:none;'>
    <li>Name: ${name}</li>
    <li>age: ${age}</li>
    <li>job: ${job}</li>
    <li>city: ${city}</li>
</ul>
`;

document.body.innerHTML = html;

/***
 * Arrays and Array Methods
 */

// Create arrays
const numbers = [23, 4, 234, 23, 45, 6, 54, 65, 5];
const numbers2 = new Array(23, 43, 54, 65, 76, 87, 34, 5);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// console.log(mixed);
// console.table(mixed);

let val;

// // Get array length
// val = numbers.length;

// // check if is array
// val = Array.isArray(numbers);

// // get single value
// val = numbers[3];
// val = numbers[0];

// // insert into array
// numbers[2] = 100;

// // find index of value
// val = numbers.indexOf(4);

// // // MUTATING ARRAYS

// // // add on to end
// // numbers.push(250);

// // // add on to front
// // numbers.unshift(111);

// // // take of from the end
// // numbers.pop();

// // // take off of the front
// // numbers.shift();

// // //splice values
// // val = numbers.splice(2, 5);

// // // reverse
// // numbers.reverse();

// // concat
// numbers.concat(numbers2);

// sort with compare function

val = numbers.sort((x, y) => x - y);

function over50(num) {
  return num > 50;
}
// find
let numbersOver50 = [];

numbers.forEach((num) => {
  if (num > 50) {
    numbersOver50.push(num);
    console.log(`${num} greater than 50`);
  }
});
console.log(numbers);
console.log(val);
console.log(numbersOver50);
