function partition1(array: number[], left: number, right: number) {
  const pivotElement = array[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotElement){
      swap(array, partitionIndex, i)
      partitionIndex++
    }
  }
  swap(array, partitionIndex, right);
  return partitionIndex
}
function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}
function swap(array: number[], j: number, i: number) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
function quickSort(array: number[], left: number, right: number){
  if (left < right ){
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex -1);
    quickSort(array, partitionIndex +1, right);
  }
}

const quickSelect = function (array: number[], left: number, right: number, idxToFind) {
  if (left < right){
    const partitionIdx = partition(array, left, right);
    if (partitionIdx === idxToFind) {
      return array[partitionIdx];
    } else if(idxToFind < partitionIdx) {
      return quickSelect(array, left, partitionIdx - 1, idxToFind)
    } else {
      return  quickSelect(array, partitionIdx + 1, right, idxToFind)
    }
  }
}

function findKthLargest1(nums: number[], k: number): number {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length-1);
  // quickSelect(nums, 0, nums.length-1, indexToFind);
  return nums[indexToFind]
}

console.log(findKthLargest1([5,2,3,1,2,4,5,6,3], 4));

const findKthLargest2 = (nums: number[], k: number) => {
  if (!nums.length) return nums;
  // standard quick select algorithm
  let random = (i, j) => Math.trunc(i + Math.random()*(j - i));

  let quick_select = (_nums, k) => {
    if (!_nums.length) return false;
    let pivot = random(0, _nums.length);
    // divide
    let [left, right] = [[], []];
    for (let [i, e] of _nums.entries()) {
      if (i == pivot) continue;
      if (e < _nums[pivot]) left.push(e);
      else right.push(e);
    }
    // conquer
    if (left.length == k) return _nums[pivot];
    if (left.length > k) return quick_select(left, k);
    return quick_select(right, k - (left.length+1));
  }
  return quick_select(nums, nums.length - k);
}

// console.log(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

