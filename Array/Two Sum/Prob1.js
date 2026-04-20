/*
    Two-sum Problem
    Statement: Have an array of numbers, and a 'target' value. From the array, get the array of indices of the two
    numbers which has their sum as 'target' value.
    E.g.:- Array:- [1,2,4,9,11]; target:- 10; output = [0, 3] 
*/


// Brute Force Approach

const getIndicesWithBruteForceApproach = (numbers, target) => {
    if (!Array.isArray(numbers)) throw new Error("Please provide a valid array");
    if (target === undefined) throw new Error("Please provide targeted value");

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {

                return [i, j]
            }
        }
    }

    return [];

};

const numbers = [1, 2, 4, 8, 11];
const target = 10;

console.log("Brute Force", getIndicesWithBruteForceApproach(numbers, target));





// Optimized Approach

const getIndicesWithOptimizedApproach = (numbers, target) => {
    if (!Array.isArray(numbers)) throw new Error("Please provide a valid array");
    if (target === undefined) throw new Error("Please provide targeted value");

    const indices = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (indices.has(complement)) {
            return [indices.get(complement), i];
        }

        indices.set(numbers[i], i);
    }

    return [];

}

console.log("Optimized", getIndicesWithOptimizedApproach(numbers, target));


/*
    Time Complexity:-
        1. Brute Force:- O(n2)
        2. Map (optimized):- O(n)
*/