const getSecondLargestNumber = (elements) => {
    if (!Array.isArray(elements)) throw new Error("Please provide a valid array");

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < elements.length; i++) {
        const num = elements[i];

        if (num > first) {
            second = first
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

const elements = [10, 2, 3, 4, 1, 5];

console.log("elements", getSecondLargestNumber(elements));
