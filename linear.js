function linearSearch(array, toFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind) return console.log("found at " + i + "th postion.");
    }
    // return -1;
}

const list = [6, 5, 9, 8, 2, 7, 4, 1]
const target = 9
const result =linearSearch(list, target)
console.log(result)

/* In linear search we traverse through each element ,
    if found returns the position of the element.
    time complexity : worst case: O(n) best case : omega(1)

*/