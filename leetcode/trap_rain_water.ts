function trap1(height: number[]): number {
  let leftP = 0;
  let rightP = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let totalH20 = 0;

  while (leftP < rightP) {
    if (height[leftP] <= height[rightP]) {
      if (height[leftP] >= maxLeft) {
        maxLeft = height[leftP];
      } else {
        totalH20 += maxLeft - height[leftP];
      }
      leftP++;
    } else {
      if (height[rightP] >= maxRight) {
        maxRight = height[rightP];
      } else {
        totalH20 += maxRight - height[rightP];
      }
      rightP--;
    }
  }

  return totalH20;
}

console.log(trap1([0,1,0,2,1,0,1,3,2,1,2,1]));