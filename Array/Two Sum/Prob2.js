/*
    Two-sum Problem
    Statement: Have an array of numbers, and a 'target' value. From the array, get the array of numbers,
    which has their sum as 'target' value.
    E.g.:- Array:- [1,2,4,9,11]; target:- 10; output = [1, 9] 
*/


const twoSum = (numbers, target) => {
    if (!Array.isArray(numbers)) throw new Error("Please provide a valid array");
    if (typeof target !== "number") throw new Error("Please provide targeted value");

    const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (map.has(complement)) {
            return [numbers[map.get(complement)], numbers[i]]
        }

        map.set(numbers[i], i);

    }

    return [];

};

const numbers = [1, 2, 4, 9, 11];
const target = 10;

console.log(twoSum(numbers, target));
