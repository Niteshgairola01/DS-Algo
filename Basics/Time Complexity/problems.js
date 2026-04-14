// Prob 1:-  O(n)
const Prob1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    }
}


// Prob 2:- O(n2)
const Prob2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(i, j);
        }
    }
}


// Prob 3:- O(n2)
const Prob3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; i++) {
            console.log(i, j);
        }
    }
}

/*
    n =10
    i = 0 ; j = [0 --> 9] --> i+10 Iterations
    i = 1 ; j = [1 --> 9] --> i+9 Iterations
    i = 2 ; j = [2 --> 9] --> i+8 Iterations
    i = 3 ; j = [3 --> 9] --> i+7 Iterations
    i = 4 ; j = [4 --> 9] --> i+6 Iterations
                        |
    i = 9 ; j = [9 --> 9] --> i+1 Iterations

    Complexity:- O(n2) 

*/



// Prob 4:- O(n)
const Prob4 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    }

    for (let j = 0; i < arr.length; j++) {
        console.log(j);
    }
}


// Prob 5:- O(log n)
const Prob5 = (arr) => {
    for (let i = 1; i < arr.length; i = i * 2) {
        console.log(i);
    }
}


// Prob 6:- 0 (n) + O (log n) --> O (n + log n) --> O(n)
const Prob6 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    }

    for (let j = 1; i < arr.length; j = j * 2) {
        console.log(j);
    }
}


// Prob 7:- O(n) + O(m) --> O(n + m)
const Prob7 = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        console.log(i);
    }

    for (let j = 0; i < arr2.length; j++) {
        console.log(j);
    }
}



// Prob 8:- O(n) * O(log n) --> O(n log n)
const Prob8 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j = j * 2) {
            console.log(i, j);
        }
    }
}


// Prob 9:- O(n2)
const Prob9 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            console.log(i, j);
        }
    }
}

/*
   Runs:- 0+1+2+3+...+(n-1)
    ~n2/2 --> O(n2)
*/




// Prob 10:- O(log n)
const Prob10 = (arr) => {
    let i = arr.length;
    while (i > 0) {
        i = Math.floor(i / 2);
        console.log(i);
    }
}