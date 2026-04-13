/*
    Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, 
    the pattern should look like as below:

    *****
    ****
    ***
    **
    *

    Print the pattern in the function given to you.
*/


const printPattern = (n) => {
    for (let i = n; i > 0; i--) {
        let str = "";
        for (let j = i; j > 0; j--) {
            str += "*"
        }
        console.log(str);
    }
}

printPattern(5);


// Time Complexity: (On2)