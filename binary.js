// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         const mid = left + Math.floor((right - left / 2))
//         if (arr[mid] === target) {
//             return mid
//         }
//         if (arr[mid] < target) {
//             left = mid + 1
//         }
//         else {
//             right = mid - 1
//         }
//     }
//     return -1
// }

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