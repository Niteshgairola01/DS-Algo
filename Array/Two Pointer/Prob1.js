/*
    Move Zeros:
    Move all the 0s to the end of the array, While maintaining the relative order of non-zero elements
    E.g.: Input: [0, 1, 0, 3, 12]; Output: [1, 3, 12, 0, 0]
*/

// Brute Force Approach

const bruteForce = (elements) => {
    if (!Array.isArray(elements)) throw new Error("Please provide a valid array");

    const nonZeroElements = [];
    const zeros = [];

    elements.forEach(element => {
        if (element !== 0) nonZeroElements.push(element)
        else zeros.push(element);
    });

    return [...nonZeroElements, ...zeros];
};

const elements = [0, 1, 0, 3, 12];
console.log(bruteForce(elements));




// Optimized Arroach
const optimizedApproach = (elements) => {
    if (!Array.isArray(elements)) throw new Error("Please provde a valid array");

    let insertPos = 0;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] !== 0) {
            elements[insertPos] = elements[i];
            insertPos++
        }
    }

    /**
     * i = 0, insert= 0; [i] = 0 --> skip 
     * i = 1, insert= 0; [i] = 1 --> [0] === 1 ==> insert++ 
     * i = 2, insert= 1; [i] = 0 --> skip
     * i = 3, insert= 1; [i] = 3 --> [1] === 3 ==> insert++ 
     * i = 4, insert= 2; [i] = 12 --> [2] === 12 ==> insert++
     * end
     * 
     * [1, 3, 12, 3, 12] 
    */


    /**insert = 2
     * insert = 2; < elements.length; [2] = 0; insert++
     * insert = 3; < elements.length; [3] = 0; insert++
     * insert = 4; < elements.length; [4] = 0; insert++
     * insert = 5; = elements.length; terminate
     * end
     * 
     * [1, 3, 12, 0, 0] 
     *  
    */
    while (insertPos < elements.length) {
        elements[insertPos] = 0;
        insertPos++;
    };

    return elements;
}

console.log(optimizedApproach(elements));
