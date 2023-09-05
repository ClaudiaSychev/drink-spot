

export const getRandomElementsFromArray = (array: any[], count: number) => {
    if (count >= array.length) {
        return array; // Return the whole array if count is greater or equal to array length
    }

    const shuffledArray = array.slice(); // Create a copy of the array to shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray.slice(0, count); // Return the first 'count' elements
}