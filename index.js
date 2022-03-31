let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    // console.log({ accumulator, currentValue });
    return accumulator + currentValue;
}, 0);
// console.log({ sum });

/****
 * Object Mutation
 *
 * *****/
const myInfo = Object.freeze({
    name: "rizzle",
    address: "1 wyoming dr",
    iq: 300,
    active: true,
    deleteMe: "hell yes",
});
let copyOfMyInfo = JSON.parse(JSON.stringify(myInfo));
delete copyOfMyInfo.deleteMe;
// console.log({ copyOfMyInfo, myInfo });

/**
 * call/stack order example
 *
 * *****/
function foo(i) {
    if (i < 0) return;
    console.log("begin: " + i);
    foo(i - 1);
    console.log("end: " + i);
}
// foo(3);

class Prod {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    Product.call(this, name, price);
    let p = new Prod(name, price);
    p.category = "food";
    this.category = "food";
}
function Toy(name, price) {
    Product.call(this, name, price);
    this.category = "toy";
}
const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);
// console.log({cheese, fun})

const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Fail" },
];
for (let i = 0; i < animals.length; i++) {
    (function (p) {
        this.print = function () {
            console.log("#" + p + " " + this.species + ": " + this.name);
        };
        // this.print();
    }.call(animals[i], i));
}

/**
 * Immediately invoked function
 *
 * *****/
((p) => {
    console.log(p);
}).call("booger");

/**
 * Recursion
 *
 * *****/
function factorial(n) {
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}
// console.log(factorial(4));

/**
 * Fib
 *
 * *****/
const fib = (n) => {
    if (n >= 3) {
        return fib(n - 1) + fib(n - 2);
    }
    else {
        return 1;
    }
};
// console.log(fib(8 ))

/**
 * Get max profit
 *
 * *****/
const get_max_profit = (stock_prices) => {
    let leftP = 0;
    let i =0;
    let lowestPrice = stock_prices[leftP];
    let highestPrice = 0;
    let maxProfit = 0;
    while(leftP <= stock_prices.length){
        if (stock_prices[leftP] < lowestPrice) {
            i = leftP;
            lowestPrice = stock_prices[leftP];
        }
        if (stock_prices[leftP] > highestPrice && i < leftP) {
            highestPrice = stock_prices[leftP];
        }

        maxProfit = Math.max(highestPrice - lowestPrice, maxProfit);

        leftP++;
    }
    return maxProfit;
}
console.log(get_max_profit([10, 7, 5, 8, 11, 9]));
