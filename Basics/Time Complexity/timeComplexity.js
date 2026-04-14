/*  
    0(1):- Contant time complexity
    Execution time does not depend on input size
*/
const getFirstElement = (arr) => arr[0];   // returns first element of the array

/*
    Always take same time (1 operation)
    Best possible complexity
*/




/**
 * O(n):- Linear Time
 * Time grows linear with input size
*/

const printAll = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log("i", arr[i]);
    }
}

// If array size inceases --> time inceases



/**
 * O(n2):- Quadric Time
 * Nested loops: very slow for large data
*/

const printPairs = (arr) => {
    // length:- 10, 
    // Outer:- 0-->9
    // Inner: For Each i; 0-->9

    // Total --> 10*10 --> 100
    // If --> length --> 100 --> Total Iterations:- 100*100 --> 10,000

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; i++) {
            console.log(arr[i], arr[j]);
        }
    }
}

// If n = 100; 10,000 operations



/**
 * O(log n):- Logarithmic Time
 * Very Efficient (Common in binary search)
 */

const binarySearch = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

// Each step cuts data in half
// Used in optimized searching


/**
 * O(n log n):- Efficient Sorting
 * Commond in good sorting algorithms 
*/

/**
 * Merge Sort
 * Quick Sort (average case)
 * Fasther the O(n2)
 * Used in real world systems
*/
