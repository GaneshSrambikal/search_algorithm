
const list = [5, 4, 8, 3, 2, 7, 1]

const toFind = 4
const result = binarySearch(list, toFind)

console.log(result)

function binarySearch(arr, target) {
    arr.sort()
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return console.log("found at " + mid + "th position");
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
    return console.log("Not found")
}

/**
 * Binary search is more efficient than linear search. 
 * The list of data must be in a sorted order for it to work.
 * it has a time complexity of O(log n) for worst case.
 * it has a time complexity of omega(1) for best case.
 */

//using recursive function
let recursiveFunction = function (arr, x, start, end) {

    // Base Condtion 
    if (start > end) return false;

    // Find the middle index 
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x 
    if (arr[mid] === x) return true;

    // If element at mid is greater than x, 
    // search in the left half of mid 
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else

        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return recursiveFunction(arr, x, mid + 1, end);
}

// Driver code 
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1))
    console.log("Element found!");
else console.log("Element not found!");

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1))
    console.log("Element found!");
else console.log("Element not found!"); 