// First non repeating element

const getFirstNonRepeatingElement = (elements) => {
    if (!Array.isArray(elements)) {
        throw new Error("Please provide an array ! ! !");
    }

    const frequency = new Map();

    for (const elem of elements) {

        if (frequency.has(elem)) {
            const count = frequency.get(elem);
            frequency.set(elem, count + 1);
        }
        else frequency.set(elem, 1);
    }

    for (const [elem, freq] of frequency) {
        if (freq === 1) return elem;
    }

    return null;
};

console.log(getFirstNonRepeatingElement([4, 5, 1, 2, 1, 2, 5]));