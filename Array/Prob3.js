/*
    Two-sum Problem
    Statement: Have an array of numbers, and a 'target' value. From the array, get the array of pairs of numbers,
    which has their sum as 'target' value.
    E.g.:- Array:- [1, 2, 4, 9, 11, 8, 5, 3, 7, 5]; target:- 10; output = [[1, 9], [2, 8], [5, 5], [3, 7]] 
*/

const twoSum = (numbers, target) => {
    if (!Array.isArray(numbers)) throw new Error("Please provide a valid array");
    if (typeof target !== "number") throw new Error("Please provide targeted value");

    const seen = new Set();
    const result = [];

    for (let num of numbers) {
        const complement = target - num;

        if (seen.has(complement)) {
            result.push([complement, num]);
        }

        seen.add(num);
    }

    console.log(seen);
    
    return result;
};

const numbers = [1, 2, 4, 9, 11, 8, 5, 3, 7, 5];
const target = 10;

console.log(twoSum(numbers, target));

