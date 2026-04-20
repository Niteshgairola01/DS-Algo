/*
    Valid palindrome
    Chekc if a number or a string is a valid palindrome or not
    E.g.: racecar --> reverse --> racecar; 12321 --> reverse --> 12321
*/

const bruteForce = (element) => {
    if ((typeof element !== "string") && (typeof element !== "number")) throw new Error("Enter valid number or string");

    if (typeof element === "string") {
        const reversed = element.split("").reverse().join("");
        return reversed === element
    }

    if (typeof element === "number") {
        const reversed = element.toString().split("").reverse().join("");
        return reversed === element.toString();
    }

    return false;
};

const number = 12321;
// const string = "this is a testing string"
const string = "A man, a plan, a canal: test Panama";


// console.log(bruteForce(number));
// console.log(bruteForce(string));




// Two-Pointers Approach

const isAlphanumeric = (char) => {
    return /^[a-z0-9]$/i.test(char)
}

const twoPointersApproach = (element) => {

    let string = element;

    if ((typeof element !== "string") && (typeof element !== "number")) throw new Error("Enter valid number or string");

    if (typeof element === "number") {
        if (element < 0) return false;   // negative numbers are not palindrome

        string = element.toString();
    }

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(string[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(string[right])) {
            right--;
        }


        if (string[left].toLowerCase() !== string[right].toLowerCase()) {
            return false;
        }

        return true;
    }

}


console.log(twoPointersApproach(number));
console.log(twoPointersApproach(string));
