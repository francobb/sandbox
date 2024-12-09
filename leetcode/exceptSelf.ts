function productExceptSelf(nums: number[]): number[] {
    // output[0] has to equal input.sh[]
    let output:number[] = [];

    // for (let i=0; i < nums.length; i++) {;
    //     let current = nums[i];
    //     console.log({ current });
    //     console.log();
    //     nums.filter((num) => {
    //         if(num !== current){
    //             final = final*num;
    //         }
    //     })
    //
    //     output.push(final)
    // }

    return output;
};

const exceptSelf = (nums: number[]) => {
    let p:number[] = [];
    nums.reduce((sum, value) => {
        p.push(sum);
        sum *= value;
        return sum
    }, 1);

    // console.log({ p });

    p.reduceRight((sum, value, index) => {
        console.log({sum, value, index});
        p[index] = p[index] * sum;
        sum *= nums[index];
        return sum
    }, 1);

    return p;
};

// console.log(productExceptSelf([1,2,3,4]));
// console.log(productExceptSelf([0,0]));
console.log(exceptSelf([0,0]));