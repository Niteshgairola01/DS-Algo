/*
    Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, 
    the pattern should look like as below:

    1
    22
    333
    4444
    55555

    Print the pattern in the function given to you.
*/

const printPattern = (n) => {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {
            str += i + 1
        }

        console.log(str);
    }
}

printPattern(5);


// Time Complexity:- O(n2)