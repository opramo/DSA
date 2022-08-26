//Bubble Sor//

/*
    The simplest sorting algorithm
    Works by repeatedly swapping the adjacent elements
    Not suitable for large data sets as its average and worst-case time complexity
    is quite high.
    Time Complexity: O(n^2)
    Space Complexity: O(1)

*/

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const arr = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr);
