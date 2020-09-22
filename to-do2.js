// Reverse
// Given a numerical array, reverse the order of values, in-place.
// The reversed array should have the same length, with existing elements
// moved to other indices so that order of elements is reversed. Working
// ‘in-place’ means that you cannot use a second array – move values within
// the array that you are given. As always, do not use built-in array functions
// such as splice().

function reverse(arr) {
  // loop thru half the array to swap the values at midpoint.
  for (let i = 0; i < arr.length / 2; i++) {
    // make a temp var to store the vals from original indices.
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// console.log(reverse([1,2,3,4]));
// console.log(reverse([9,5,4,0,1]));

// ******************************************************************

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset.
// Shift arr’s values to the right by that amount. ‘Wrap-around’ any
// values that shift off array’s end to the other side, so that no data is lost.
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2].
// Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

function rotate(arr, shiftBy) {
    let t = Math.abs(shiftBy);
    
    while (t > 0) {
        if (shiftBy > 0) {
            // if n is positive
            let temp = arr[arr.length - 1]; // create a temp variable to store the last item in the given array.
            // loop thru array with FOR loop starting at the END of the array.
            for (let i = arr.length-1; i > 0; i--) { // i-- to decrease since we're starting at the end. 
                // shift the indices over by one by assigning them to the temp.
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        } else {
            let temp = arr[0];
            for (let i = 0; i < arr.length - 1; i ++) {  // if n is negative, loop thru the array and push the elements to the left 
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        t--;
    }
    
    return arr;
}
console.log("this should be [3, 1, 2]");
console.log(rotate([1,2,3], 1));
console.log("this should be [2, 3, 1]");
console.log(rotate([1,2,3], 2));

console.log("this should be [2, 3, 1]");
console.log(rotate([1,2,3], -1));
console.log("this should be [3, 1, 2]");
console.log(rotate([1,2,3], -2));

