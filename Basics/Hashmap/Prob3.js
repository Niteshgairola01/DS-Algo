// Return all elements that appear more than once.

const getAllRepeatingElements = (elements) => {
    if (!Array.isArray(elements)) throw new Error("Please provide an array ! ! !");

    const frequency = new Map();

    for (const elem of elements) {
        if (frequency.has(elem)) {
            const count = frequency.get(elem);
            frequency.set(elem, count + 1);
        }

        else frequency.set(elem, 1);
    };

    const repeatedElements = [];

    for (const [elem, freq] of frequency) {
        if (freq > 1) {
            repeatedElements.push(elem);
        }
    };

    return repeatedElements;

};

console.log(getAllRepeatingElements([1, 2, 3, 1, 2, 4]));
