function containsDuplicate(nums: number[]): boolean {
    let hs = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (hs.has(nums[i])) return true;
        if (!hs.has(nums[i])) hs.add(nums[i]);
    }
    return false;
}

let contains_duplicate = (nums: number[]) => {
    if (nums.length===0) return false;
    let numSet = new Set(nums);
    return numSet.size != nums.length;
};

function duplicateContains(nums: number[]){
    nums.sort()
    return nums.some((el, idx) => el === nums[idx + 1]);
}

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
// console.log(contains_duplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(duplicateContains([1,1,1,3,3,4,3,2,4,2]));

