const bruteForce = (elements) => {
    if (!Array.isArray(elements)) throw new Error("Please provide a valid array");

    let max_sum = -Infinity;

    for (let i = 0; i < elements.length; i++) {
        for (let j = i; j < elements.length; j++) {
            let current_sum = 0;

            for (k = i; k <= j; k++) {
                current_sum += elements[k];
            }

            if (current_sum > max_sum) {
                max_sum = current_sum
            }
        }
    }

    return max_sum;
}

const elements = [8, 1, -3, 4, -1, 2, 1, -5, 4];

console.log("brute", bruteForce(elements));





``


const maxSubArray = (elements) => {
    if (!Array.isArray(elements)) throw new Error("Please provide a valid array");

    let max_sum = elements[0];
    let current_sum = elements[0];

    for (let i = 1; i < elements.length; i++) {

        if (elements[i] > (current_sum + elements[i])) {
            current_sum = elements[i];
        } else {
            current_sum += elements[i];
        }

        if (current_sum > max_sum) {
            max_sum = current_sum
        }
    }

    return max_sum;
}

/*

    i/p:- [8, 1, -3, 4, -1, 2, 1, -5, 4]

    current = -2
    maxSum = -2

    i = 1;
        current = -1 < -1 => 1
        maxSum = 1 > -2 => 1

    i = 2;
        current = -3 < -2 => -2
        maxSum = -2 < 1 => 1

    i = 3;
        current = 4 > 2 => 4
        maxSum = 4 > 1 => 4

    i = 4;
        current = -1 < 3 => 3
        maxSum = 3 < 4 => 4

    i = 5;
        current = 2 < 5 => 5
        maxSum = 5 > 4 => 5

    i = 6;
        currnet = 1 < 6 => 6
        maxSum = 6 > 5 => 6

    i = 7;
        current = -5 < 1 => 1;
        maxSum = 1 < 6 => 6

    i = 8;
        current = 4 < 5 => 5
        maxSum = 5 < 6 => 6
*/

console.log("maxSubarray", maxSubArray(elements));
