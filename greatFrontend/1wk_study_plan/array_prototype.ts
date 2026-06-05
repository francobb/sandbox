/*
This question is about reproducing the native filter contract: iterate over the array-like this,
skip holes, call the predicate with the right arguments and thisArg, and collect only truthy matches.
*/

export {}; // Makes this file a module
import {test, describe} from "node:test";
import assert from "node:assert/strict";

type ICallbackFn<T> = (value: T, index: number, array: T[]) => boolean;
declare global {
    interface Array<T>{
        myFilter(callbackFn: ICallbackFn<T>, thisArg?: any): Array<T>;
    }
}


// clarifying questions:
// should callback func accept the same three args (val,index, array)
// should I include type checking/defensive coding in case call back is not a function?
// should I use modern ES6 features like for..of or should this be compatible with older js versions?
Array.prototype.myFilter = function<T> (callbackFn: ICallbackFn<T>, thisArg: any) {
    // step 1: input validation - check callbackFn type is function
    if( typeof callbackFn !== 'function' || !callbackFn.call || !callbackFn.apply ) {
        throw 'Argument callbackFn is not of type "function" '
    }
    // filtered array that is returned
    const result: any[] = [];
    // loop through the array input;
    this.forEach((num, index) => {
        // check that number is not spare
        if(!Number.isInteger(num)) return;

        // check number against callbackFn
        if(callbackFn.call(thisArg, num, index, this)){
            result.push(num);
        }
    })

    return result;
};

describe('Array.prototype.myFilter', () => {
    const isEven = (element: any, _index?: number) => element % 2 === 0;
    const isOdd = (element: any, _index?: number) => element % 2 === 1;
    test('without sparse array', () => {
        const results = [1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
        assert.deepStrictEqual(results, [2,4]);
    });

    test('with sparse array', () => {
        const results = [1, 2, , 4].myFilter((value: any) => value % 2 == 0); // [2,4]
        assert.deepStrictEqual(results, [2,4]);
    })

    test('even numbers', () => {
        assert.deepStrictEqual([1, 10, 4].myFilter(isEven), [10, 4]);
    });

    test('odd numbers', () => {
        assert.deepStrictEqual([1, 10, 3].myFilter(isOdd),[1, 3]);
    });
})


/**
 * [1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
 * @template T
 * @param {(value: T, index: number, array: Array<T>) => boolean} callbackFn
 * @param {unknown} [thisArg]
 * @returns {Array<T>}
 */
// Array.prototype.myFilter = function (callbackFn, thisArg) {
//     // defensive code
//     if(typeof callbackFn != 'function') throw 'Callback Function is not a function';
//
//     const len = this.length;
//     if (len === 0) return [];
//
//     const results = [];
//     let counter = 0;
//     let resultCounter = 0;
//
//     while (counter < len){
//         if(typeof this[counter] === 'number' && callbackFn.call(thisArg, this[counter], counter, this)){
//             results[resultCounter] = this[counter];
//             resultCounter++
//         }
//         counter++;
//     }
//
//     return results
// };

// const isOdd = (element, index) => element % 2 === 1;

// [1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
// [1, 2, , 4].myFilter((value) => value % 2 == 0); // [2, 4]
// console.log([1, 10, 3].myFilter(isOdd)); // [1, 3]
