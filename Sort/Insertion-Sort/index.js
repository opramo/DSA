//Insertion Sort//

/*
  One of the simplest algorithm with simple implementation
  Only effecient for small data values
  Appropriate for data sets which are already partially sorted
  Takes maximum time to sort if elements are sorted in reverse order
  Takes minimum time (order of n) when elements are already sorted 
  Time Complexity: O(n^2)
  Space Complexity: O(1)
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insert) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = insert;
  }
};

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);
