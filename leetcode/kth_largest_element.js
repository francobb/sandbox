var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function partition1(array, left, right) {
    var pivotElement = array[right];
    var partitionIndex = left;
    for (var i = left; i < right; i++) {
        if (array[i] < pivotElement) {
            swap(array, partitionIndex, i);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, right);
    return partitionIndex;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
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
function swap(array, j, i) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
function quickSort(array, left, right) {
    if (left < right) {
        var partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
}
var quickSelect = function (array, left, right, idxToFind) {
    if (left < right) {
        var partitionIdx = partition(array, left, right);
        if (partitionIdx === idxToFind) {
            return array[partitionIdx];
        }
        else if (idxToFind < partitionIdx) {
            return quickSelect(array, left, partitionIdx - 1, idxToFind);
        }
        else {
            return quickSelect(array, partitionIdx + 1, right, idxToFind);
        }
    }
};
function findKthLargest1(nums, k) {
    var indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    // quickSelect(nums, 0, nums.length-1, indexToFind);
    return nums[indexToFind];
}
console.log(findKthLargest1([5, 2, 3, 1, 2, 4, 5, 6, 3], 4));
var findKthLargest2 = function (nums, k) {
    if (!nums.length)
        return nums;
    // standard quick select algorithm
    var random = function (i, j) { return Math.trunc(i + Math.random() * (j - i)); };
    var quick_select = function (_nums, k) {
        var e_1, _a;
        if (!_nums.length)
            return false;
        var pivot = random(0, _nums.length);
        // divide
        var _b = __read([[], []], 2), left = _b[0], right = _b[1];
        try {
            for (var _c = __values(_nums.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), i = _e[0], e = _e[1];
                if (i == pivot)
                    continue;
                if (e < _nums[pivot])
                    left.push(e);
                else
                    right.push(e);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // conquer
        if (left.length == k)
            return _nums[pivot];
        if (left.length > k)
            return quick_select(left, k);
        return quick_select(right, k - (left.length + 1));
    };
    return quick_select(nums, nums.length - k);
};
// console.log(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
