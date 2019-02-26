const firstName = 'chang';
const lastName = 'pu';
const age = 20;
const str = 'Hello there my name is pu';
const tags = 'hello yee';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'chang';
val += 'pu';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

val=firstName.concat('',lastName);
console.log(val);

val= firstName.toLocaleUpperCase();
console.log(val);

val= firstName.toLocaleLowerCase();
console.log(val);

val= firstName[0];
console.log(val);

val= firstName.indexOf('g');
console.log(val);

val= firstName.indexOf('h');
console.log(val);

val= firstName.charAt('5');
console.log(val);

val= firstName.charAt('firstname.length-1');
console.log(val);


val= firstName.slice(0,5);
console.log(val);
val= firstName.slice(0,5);
console.log(val);

val= str.split('');
console.log(val);

val= str.tag(',');
console.log(val);

val= str.replace('henry','steve');
console.log(val);
val= str.includes('henry');
console.log(val);