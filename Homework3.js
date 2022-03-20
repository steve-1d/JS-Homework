// 1. Given an array. Compute the length of the array (without using .length).

function computeArrayElements (arr) {

let sum = 0;
    
    for (var i = 0; i < arr[i]; i++) {
        sum += 1
    }
return sum
}
    
// 2. Given an array of numbers. Print the sum of the elements in array.
    
function computeArrayElements (arr) {
    
let sum = 0;
        
    for (var i = 0; i < arr[i]; i++) {
        sum += arr[i]
    }
return sum
}
    
// 3. Given two numbers. Print powers of 3 between that numbers (without using Math.pow).

//???

// 4. Given a number as input, insert dashes (-) between each two even numbers.
    
let num = String(prompt(`Insert a number`));
let str = num;
let result = [str[0]];  

for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
        result.push('-', str[i]);
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(``));
    
// 5.Insert a n positive number. Print the n-st prime number.

//??? Վերջին հարցի պահանջը անհասկանալի էր: Կարծում էի որ պետք է գրեինք ներմուծած պարզ թվի հաջորդող պարզ թիվը բայց պահանջում այդպես չէր:
