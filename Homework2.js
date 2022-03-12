// 1. For a given number calculate the sum of its digits

let num = Number(prompt(`Insert a number to calculate the sum of digits in inserted number`));

    let sum=0;
    while(num!=0){
     sum += num % 10;
     num = Math.floor(num/10);
    }
  
console.log (sum);

// 2. Given three sides of triangle. Check whether triangle is valid or not.
//    Print `yes` if it is valid and `no` otherwise.

let side1 = Number(prompt(`Insert a number`)); //x

let side2 = Number(prompt(`Insert a number`)); //y

let side3 = Number(prompt(`Insert a number`)); //z

if (side1 > side2 && side1 > side3) {
        
        if (side2 + side3 > side1) {
            console.log(`yes`);
        } else {
            console.log(`no`);
        }

} else if (side2 > side1 && side2 > side3) {
        
        if (side1 + side3 > side2) {
             console.log(`yes`);
        } else {
             console.log(`no`);
        }

} else if (side3 > side1 && side3 > side2) {
        
        if (side1 + side2 > side3) {
            console.log(`yes`);
        } else {
            console.log(`no`);
        }
}     

// 3. Count numbers of digit 9 in a number.

let num = Number(prompt(`Insert a number to check if it has nines in it`));

let numberCount = 0;

while (num > 0) {
    let digit = num % 10;
    if (digit === 9) {
        numberCount++;
    }
    num = (num - digit) / 10;
}
console.log (`There are ${numberCount} nines in your number`);

// 4. Given positive number. Print in reverse order.

let number = Number(prompt(`Insert a number`));

let result = 0;
let counter = 0;

for (let i = number ; i >= 1 ; i = i / 10 - (i % 10) * 0.1) {
    counter = i % 10;
    result = result * 10 + counter;
}

console.log (result);

// 5. Given a number as input, check, is it power of 2.

let num = Number(prompt(`Insert a number`));

let powerOfTwo = 2;

for (let i = 1 ; i < num && powerOfTwo < num; i++) {
  powerOfTwo = powerOfTwo * 2;
}

if (powerOfTwo === num) {
    console.log (true);
} else {
    console.log (false);
}