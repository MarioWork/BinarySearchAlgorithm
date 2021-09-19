function binarySearchNumber(numbers, n) {
 
    var currentPosition = Math.floor(numbers.length / 2);

    while (currentPosition !== numbers.length) {

        if (numbers[currentPosition] === n) {
            return "Found the numnber at position "+currentPosition;
        }

        if (numbers[currentPosition] > n) {
            currentPosition--;
        }

        if (numbers[currentPosition] < n) {
            currentPosition++;
        }
    }

    return "Not found";
}

console.log(binarySearchNumber([0, 1, 2, 3, 4, 5, 6], 5));
console.log(binarySearchNumber([0, 1, 2, 3, 4, 5, 6], 10));