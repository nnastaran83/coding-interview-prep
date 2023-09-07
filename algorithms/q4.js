//find element pairs whose sum equal the second argument arg and return the sum of their indices.
//
// pairs that have the same numeric elements but different indices. Each pair should use the lowest
// possible available indices. Once an element has been used it cannot be reused to pair with
// another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at 
//index 0 rather than the 1 at index 1, because 0+2 < 1+2.
//
//([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
// We can then write out the array with their indices and values.

function pairwise(arr, arg) {
    let allIndicesSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let pairIndicesSum = 0;
        let matchedIndex = -1;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                pairIndicesSum = i + j;
                matchedIndex = j;
                break;
            }

        }
        if (matchedIndex !== -1) {
            arr[matchedIndex] = undefined;
        }
        allIndicesSum += pairIndicesSum;
    }
    return allIndicesSum;
}



console.log(pairwise([1, 1, 1], 2));