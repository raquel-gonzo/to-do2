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