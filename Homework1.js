// 1. Declare 2 variables a and b such that a>b and define values for them.

let a = 14;
let b = 5;

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);


let a = 99;
let b = 11;

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);


let a = 81;
let b = 16;

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);

// 2. Print your name and age in the following format:

let name = `Stephan`;
let age = 21;

console.log (`My name is ` + name + `, I am ` + age + `.`);

// 3. Declare a variable with defined value. Print `yes` if last diggit is odd, otherwise print `no`:

// a.

let a = 78756;

let b = (a % 10 - a % 10 % 1);

if (b === 1) {
    console.log (`yes`);
} else if (b === 3) {
    console.log (`yes`);
} else if (b === 5) {
    console.log (`yes`);
} else if (b === 7) {
    console.log (`yes`);
} else if (b === 9) {
    console.log (`yes`);
} else {
    console.log (`no`);
}



let a = -122;

let b = (a % 10 - a % 10 % 1);

if (b === 1) {
    console.log (`yes`);
} else if (b === 3) {
    console.log (`yes`);
} else if (b === 5) {
    console.log (`yes`);
} else if (b === 7) {
    console.log (`yes`);
} else if (b === 9) {
    console.log (`yes`);
} else {
    console.log (`no`);
}



let a = 89;

let b = (a % 10 - a % 10 % 1);

if (b === 1) {
    console.log (`yes`);
} else if (b === 3) {
    console.log (`yes`);
} else if (b === 5) {
    console.log (`yes`);
} else if (b === 7) {
    console.log (`yes`);
} else if (b === 9) {
    console.log (`yes`);
} else {
    console.log (`no`);
}



let a = 1;

let b = (a % 10 - a % 10 % 1);

if (b === 1) {
    console.log (`yes`);
} else if (b === 3) {
    console.log (`yes`);
} else if (b === 5) {
    console.log (`yes`);
} else if (b === 7) {
    console.log (`yes`);
} else if (b === 9) {
    console.log (`yes`);
} else {
    console.log (`no`);
}

//  b.

let a = 78756;

let b = (a % 10 - a % 10 % 1);

switch (b) {
    case 1:
        console.log (`yes`);
        break;
    case 3:
        console.log (`yes`);
        break;
    case 5:
        console.log (`yes`);
        break;
    case 7:
        console.log (`yes`);
        break;
    case 9: 
        console.log (`yes`);
        break;
    default :
     console.log (`no`);
}


let a = -122;

let b = (a % 10 - a % 10 % 1);

switch (b) {
    case 1:
        console.log (`yes`);
        break;
    case 3:
        console.log (`yes`);
        break;
    case 5:
        console.log (`yes`);
        break;
    case 7:
        console.log (`yes`);
        break;
    case 9: 
        console.log (`yes`);
        break;
    default :
     console.log (`no`);
}


let a = 89;

let b = (a % 10 - a % 10 % 1);

switch (b) {
    case 1:
        console.log (`yes`);
        break;
    case 3:
        console.log (`yes`);
        break;
    case 5:
        console.log (`yes`);
        break;
    case 7:
        console.log (`yes`);
        break;
    case 9: 
        console.log (`yes`);
        break;
    default :
     console.log (`no`);
}


let a = 1;

let b = (a % 10 - a % 10 % 1);

switch (b) {
    case 1:
        console.log (`yes`);
        break;
    case 3:
        console.log (`yes`);
        break;
    case 5:
        console.log (`yes`);
        break;
    case 7:
        console.log (`yes`);
        break;
    case 9: 
        console.log (`yes`);
        break;
    default :
     console.log (`no`);
}

// 4. Check whether a given number is negative. Print `yes` if it is negative, print `no` otherwise.

// a.

let a = Number(prompt(`Insert a number`));

if (a >= 0) {
    console.log (`no`);
} else {
    console.log (`yes`);
}

// b.

let a = Number(prompt(`Insert a number`));

switch (a >= 0) {
    case true:
        console.log (`no`);
        break;
    default :
        console.log (`yes`);
}

// c.

let a = Number(prompt(`Insert a number`));

console.log (a>=0 ? `no` : `yes`);

// 5. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0:

let a = 3;
let b = 14;

if (a % b == 0 || b % a == 0) {
    console.log (1);
} else {
    console.log (0);
}


let a = 18;
let b = 2;

if (a % b == 0 || b % a == 0) {
    console.log (1);
} else {
    console.log (0);
}


let a = 7;
let b = 21;

if (a % b == 0 || b % a == 0) {
    console.log (1);
} else {
    console.log (0);
}

// 6. Given any number between 1 and 12. Print the name of the respective month.

//  a.

let month = Number(prompt(`Insert the number of the month`));

switch (month) {
    case 1:
        console.log (`January`);
        break;
    case 2:
        console.log (`February`);
        break;
    case 3:
        console.log (`March`);
        break;
    case 4:
        console.log (`April`);
        break;
    case 5:
        console.log (`May`);
        break;
    case 6:
        console.log (`June`);
        break;
    case 7:
        console.log (`July`);
        break;
    case 8:
        console.log (`August`);
        break;
    case 9:
        console.log (`September`);
        break;
    case 10:
        console.log (`October`);
        break;
    case 11:
        console.log (`November`);
        break;
    case 12:
        console.log (`December`);
        break;
    default :
        console.log (`You have inserted a wrong month number. The year has only 12 of them :) Try again ;)`);
}

//  b.

let month = Number(prompt(`Insert the number of the month`));

if (month === 1) {
    console.log (`January`);
} else if (month === 2) {
    console.log (`February`);
} else if (month === 3) {
    console.log (`March`);
} else if (month === 4) {
    console.log (`April`);
} else if (month === 5) {
    console.log (`May`);
} else if (month === 6) {
    console.log (`June`);
} else if (month === 7) {
    console.log (`July`);
} else if (month === 8) {
    console.log (`August`);
} else if (month === 9) {
    console.log (`September`);
} else if (month === 10) {
    console.log (`October`);
} else if (month === 11) {
    console.log (`November`);
} else if (month === 12) {
    console.log (`December`);
} else {
    console.log (`You have inserted a wrong month number. The year has only 12 of them :) Try again ;)`);
}

// 7. Given three numbers. Find the maximum one.

let a = -4;
let b = 6;
let c = 0;

if (a >= b && a >= c) {
    console.log (a + ` is maximum`);
} else if (b >= a && b >= c) {
    console.log (b + ` is maximum`);
} else {
    console.log (c + ` is maximum`);
}


let a = 1020;
let b = 500;
let c = -450;

if (a >= b && a >= c) {
    console.log (a + ` is maximum`);
} else if (b >= a && b >= c) {
    console.log (b + ` is maximum`);
} else {
    console.log (c + ` is maximum`);
}


let a = 14;
let b = 8;
let c = 14;

if (a >= b && a >= c) {
    console.log (a + ` is maximum`);
} else if (b >= a && b >= c) {
    console.log (b + ` is maximum`);
} else {
    console.log (c + ` is maximum`);
}