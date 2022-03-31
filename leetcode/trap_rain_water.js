var doIt = function (mainOne, bigOne, momma) {
    if (mainOne >= bigOne) {
        return bigOne = mainOne;
    }
    else {
        return momma += bigOne - mainOne;
    }
};
function trap1(height) {
    console.log("BITCH");
    var leftPointer = 0, maxLeft = 0, maxRight = 0, maxWater = 0;
    var rightPointer = height.length - 1;
    while (leftPointer < rightPointer) {
        if (height[leftPointer] <= height[rightPointer]) {
            // doIt(height[leftPointer], maxLeft, maxWater);
            if (height[leftPointer] > maxLeft) {
                maxLeft = height[leftPointer];
            }
            else {
                maxWater += maxLeft - height[leftPointer];
            }
            leftPointer++;
        }
        else {
            // doIt(height[rightPointer], maxRight, maxWater);
            rightPointer--;
        }
    }
    return maxWater;
}
console.log(trap1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
