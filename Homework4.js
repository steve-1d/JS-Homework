// 1. Given three numbers a, b (a <= b) and step. Create an array of evenly spaced 
// elements starting from a to b spaced by step.

function createEvenlySpacedArray (a, b, step) {

    let resultArray = [];

    for (; a <= b; a += step) {
        resultArray.push(a);
    }
return resultArray;
}

createEvenlySpacedArray (1, 5, 1);

createEvenlySpacedArray (10, 100, 20);

createEvenlySpacedArray (1, 5, 0.5);

// 2. Given a string and a symbol. Find the number os occurrences of the symbol in the string.

function checkIfSymbolIsIncludedInString (string, symbol) {

    let num = 0;
           
    for (let i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            num += 1;
        }
    }
return num;
}

checkIfSymbolIsIncludedInString (`Some text here`, ``);

checkIfSymbolIsIncludedInString (`another string`, `t`);

// 3. Given a string. Check whether the string is palindrome or not. 

function checkIfStringIsPalindrome (string) {

    if (string == ``) {
        return false;
    }
           
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[string.length-1]) {
            return true;
        } else {
            return false;
        }
    }
}

checkIfStringIsPalindrome (`palindrome`);

checkIfStringIsPalindrome (`T`);

checkIfStringIsPalindrome (`racecar`);

checkIfStringIsPalindrome (``);

// 4.Given an array of numbers. Find the maximum element in array.

function findTheBiggestNumber (arr) {
    
    let result = Math.max(...arr);

return result;
}

findTheBiggestNumber ([1, 10, 2, 2, 3]);

// 5. Given an array. Create the array which elements are products between two neighbours.

function productOfTwoNeighbours (arr) {
    
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i - 1] + arr[i]);
        }
return result;
}

productOfTwoNeighbours ([3, 7, 12, 5, 20, 0]);

productOfTwoNeighbours ([1, 1, 4, 32, 6]);

// 6. Given a string and symbols. Change first symbol by the second one in the string.

function changeSymbols (string, symbol1, symbol2) {

    let resultString = ``;

    for (let i = 0; i < string.length; i++) {
        if (string[i] == symbol1) {
            resultString += symbol2; 
        } else {
            resultString += string[i];
        }
    }
return resultString;  
}

changeSymbols (`The results are not recorded yet`,`t`,`w`);

changeSymbols (`does the following code`, `o`, `0`);

// 7. Print the following number pattern. 
