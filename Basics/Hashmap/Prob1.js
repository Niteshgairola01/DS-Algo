// Given a string, return the frequency of each character.

const getFrequencyOfCharacters = (str) => {
    if (typeof str !== "string") return new Map();

    const frequency = new Map();

    for (const char of str) {
        if (frequency.has(char)) {
            const count = frequency.get(char);
            frequency.set(char, count + 1);
        }
        else frequency.set(char, 1);

    };

    return frequency;

};

console.log(getFrequencyOfCharacters("This is a testing string"));

// Time complexity:- O(n)