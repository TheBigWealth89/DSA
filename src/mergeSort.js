import express from "express";
const app = express();
const PORT = 6000;

function mergeSort(arr) {
  /**
     Sort a list in ascending order 
     Returns a new sorted list

     Divide: Find the midpoint of the list and divide into sublists
     Conquer: Recursively sort the sublists creates in previous step
     Combine: Merge the sorted sublists created in previous step
     */

  const length = arr.length;
  if (length <= 1) return arr;
  const [leftHalf, rightHalf] = split(arr);

  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);
  return merge(left, right);
}

function split(arr) {
  /**
     Divide the unsorted list at midpoint into sublists
     Returns two subists - left and right
     */
  const mid = Math.floor(arr.length / 2);
//   console.log(
//     `Splitting ${arr} into ${arr.slice(0, mid)} and ${arr.slice(mid)}`,
//   );

  const left = arr.slice(0, mid);
  //   console.log(`Left half: ${left}`);
  const right = arr.slice(mid);
      console.log(`Right half: ${right}`);
  return [left, right];
}

function merge(left, right) {
  /**
     Merge two lists, sorting them in the process
     Returns a new merged list
     */

  let merge = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merge.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      merge.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

    while (leftIndex < left.length) {
      merge.push(left[leftIndex]);
      leftIndex += 1;
    }

    while (rightIndex < right.length) {
      merge.push(right[rightIndex]);
      rightIndex += 1;
    }
    console.log(`Merging  ${merge}`);
  return merge;
}

const arr = [3, 9, 10, 1, 6, 4, 8, 2, 5, 7];
console.log(mergeSort(arr));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
