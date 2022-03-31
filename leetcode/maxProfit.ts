function maxProfit(prices: number[]): number {
    // convert to map
    let min = prices[0];
    let max = 0;

    for (const [index, price ] of prices.entries()) {
        min = Math.min(price, min);
        max = Math.max(max, price-min);
    }

    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));
