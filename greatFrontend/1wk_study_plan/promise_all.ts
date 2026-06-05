import {describe, test} from "node:test";
import assert from "node:assert/strict";


// Clarifying questions:
// 1: is there any defensive programming needed for the input iterable?
// 2: should the function handle non-array iterables gracefully?
// 3: Should the function support non array iterables like Set/Map
// 4: How should we handle non-promise inputs? Wrap them in promise?
// 5: Should I implement this using async/await or promise.then chaining?
function promiseAll<T extends readonly unknown[] | []>(
    iterable: T,
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
    type ReturnType = { -readonly [P in keyof T]: Awaited<T[P]> };

    return new Promise((resolve, reject) => {
        if (iterable.length === 0) {
            resolve([] as unknown as ReturnType);
            return;
        }

        const results = new Array(iterable.length);
        let unresolvedCount = iterable.length;

        iterable.forEach(async (item, index) => {
            try {
                // Await handles both Promise and non-Promise values automatically
                const value = await item;
                results[index] = value;
                unresolvedCount--;

                if(unresolvedCount === 0) {
                    resolve(results as unknown as ReturnType);
                }
            } catch(e) {
                reject(e);
            }
        })
    })
}

describe('promiseAll', () => {
    test('returns promise', () => {
        const p = promiseAll([]);
        assert.ok(p instanceof Promise)
    });

    test('empty input array', async () => {
        const res = await promiseAll([]);
        assert.deepStrictEqual(res, []);
    });

    describe('one promise', () => {
        describe('resolve', () => {
            test('value', async () => {
                const p0 = 2;
                const res = await promiseAll([p0]);
                assert.deepStrictEqual(res, [2]);
            });

            test('instant', async () => {
                const p0 = Promise.resolve(2);
                const res = await promiseAll([p0]);
                assert.deepStrictEqual(res, [2]);
            });

            test('delayed', async () => {
                const p0 = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(2);
                    }, 10);
                });

                const res = await promiseAll([p0]);
                assert.deepStrictEqual(res, [2]);
            });
        });

        describe('reject', () => {
            test('instant', async () => {
                const p0 = Promise.reject(2);
                await assert.rejects(promiseAll([p0]), (err) => err === 2);
            });

            test('delayed', async () => {
                const p0 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(2);
                    }, 10);
                });
                await assert.rejects(promiseAll([p0]), (err) => err === 2);
            });
        });
    });

    describe('multiple promises', () => {
        describe('all resolve', () => {
            test('instant', async () => {
                const p0 = Promise.resolve(2);
                const p1 = Promise.resolve(3);
                const res = await promiseAll([p0, p1]);
                assert.deepStrictEqual(res, [2, 3]);
            });

            test('delayed', async () => {
                const p0 = Promise.resolve(2);
                const p1 = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(3);
                    }, 10);
                });
                const res = await promiseAll([p0, p1]);
                assert.deepStrictEqual(res, [2, 3]);
            });

            test('mixture', async () => {
                const p0 = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(2);
                    }, 10);
                });
                const p1 = Promise.resolve(3);
                const p2 = 4;
                const res = await promiseAll([p0, p1, p2]);
                assert.deepStrictEqual(res, [2, 3, 4]);
            });

            test('many delayed', async () => {
                const p0 = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(1);
                    }, 200);
                });
                const p1 = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(2);
                    }, 100);
                });
                const p2 = new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(3);
                    }, 10);
                });
                const res = await promiseAll([p0, p1, p2]);
                assert.deepStrictEqual(res, [1, 2, 3]);
            });
        });

        describe('all reject', () => {
            test('instant', async () => {
                const p0 = Promise.reject(2);
                const p1 = Promise.reject(3);
                await assert.rejects(promiseAll([p0, p1]), (err) => err === 2);
            });

            test('delayed', async () => {
                const p0 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(3);
                    }, 1);
                });
                const p1 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(2);
                    }, 10);
                });
                await assert.rejects(promiseAll([p0, p1]), (err) => err === 3);
            });

            test('mixture', async () => {
                const p0 = Promise.reject(42);
                const p1 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(2);
                    }, 10);
                });
                await assert.rejects(promiseAll([p0, p1]), (err) => err === 42);
            });
        });

        describe('mix of resolve and reject', () => {
            test('instant resolve delayed reject', async () => {
                const p0 = Promise.resolve(42);
                const p1 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(2);
                    }, 10);
                });
                await assert.rejects(promiseAll([p0, p1]), (err) => err === 2);
            });

            test('instant resolve instant reject', async () => {
                const p0 = Promise.resolve(42);
                const p1 = Promise.reject(2);
                await assert.rejects(promiseAll([p0, p1]), (err) => err === 2);
            });

            test('instant rejects', async () => {
                const p0 = Promise.reject(42);
                const p1 = Promise.reject(43);
                await assert.rejects(promiseAll([p0, p1]), (err) => err === 42);
            });

            test('many promises', async () => {
                const p0 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(1);
                    }, 200);
                });
                const p1 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(2);
                    }, 100);
                });
                const p2 = new Promise((_, reject) => {
                    setTimeout(() => {
                        reject(3);
                    }, 10);
                });
                await assert.rejects(promiseAll([p0, p1, p2]), (err) => err === 3);
            });
        });
    });
});

/*
    Promise.all() is one of the most-used asynchronous APIs in JavaScript.
    Below is a quick reference on how to use it, then a mental model of how it works,
    and finally an interview challenge to implement it from scratch.

    Implement your own version of Promise.all, called promiseAll, with the difference that the
    function takes an array instead of a generic iterable. Be sure to read the description carefully and
    implement accordingly.
*/

/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
// export default function promiseAll(iterable) {
//     if(iterable.length === 0) return Promise.resolve([]);
//     const outPutArray = new Array(iterable.length);
//     let counter = iterable.length;
//
//     return new Promise((resolve, reject) => {
//         iterable.forEach((it) => {
//             Promise.resolve(it)
//                 .then(value => {
//                     outPutArray[counter] = value;
//                     counter--;
//                 }).catch(e => {
//                 reject(e)
//             })
//
//
//             if(counter === 0){
//                 resolve(outPutArray)
//             }
//         })
//     })
//
// }