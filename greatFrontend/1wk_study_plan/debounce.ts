import {describe, test} from "node:test";
import assert from "node:assert/strict";

// clarifying questions:
// 1: should I write defensive code to validate the func input?
// 2: can the callback func take in any arguments?
// 3: what happens if the wait is 0?

function debounce(func: Function, wait: number): Function {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    return function(this: any, ...args: any[]) {
        // clear existing timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    }

}

describe('debounce', () => {
    test('can be initialized', () => {
        const increment = debounce(() => {}, 50);
        assert.ok(increment);
    });

    test('executes after duration', (_t, done) => {
        let i = 0;
        const increment = debounce(() => {
            i++;
        }, 10);

        assert.equal(i, 0);
        increment();
        assert.equal(i, 0);

        setTimeout(() => {
            assert.equal(i, 1);
            done();
        }, 20);
    });
});


export function debounceWithLeadingOption(func: Function, wait: number, options?: { leading?: boolean }): Function {
    const isLeading = options?.leading ?? false;
    let timeoutId: string | number | NodeJS.Timeout | null | undefined;

    return function(this: any, ...args: any[]){

        clearTimeout(timeoutId as number);

        timeoutId = setTimeout(() => {
            if(!isLeading){
                timeoutId = null;
                func.apply(this, args);
            }
        }, wait);

        if(isLeading && !timeoutId){
            func.apply(this, args)
        }
    }

}

export function debounceWithMaxWaitOption(func: Function, wait: number, options: { maxWait?: number } = {}): Function {
    // set default vals
    let timeoutId: number | null | NodeJS.Timeout;
    const maxWait = options?.maxWait;

    // track the last time the timer was called
    let lastExecutionTime = 0;

    // the return function
    return function(this: any, ...args: any[]) {
        // get the time
        const now = Date.now();

        // if last execution time hasn't been called set it to now
        if(!lastExecutionTime){
            lastExecutionTime = now;
        }

        // check if time has elapsed longer than maxWait time
        if(maxWait && now - lastExecutionTime > maxWait){
            lastExecutionTime = now;
            clearTimeout(timeoutId as number)
            timeoutId = null;
            func.call(this, ...args)
        } else {
            timeoutId = setTimeout(() => {
                lastExecutionTime = 0;
                clearTimeout(timeoutId as number);
                timeoutId = null;
                func.call(this, ...args)
            }, wait);
        }
    }
}

export function debounceWithCancelAndFlush(func: Function, wait: number): Function {
    let timeoutId: number | undefined | NodeJS.Timeout;
    let context: any;
    let thisArgs: any;

    function debounced(this: any, ...args: any) {
        context = this;
        thisArgs = args;
        clearTimeout(timeoutId as number);
        timeoutId = setTimeout(() => {
            func.apply(this, args);

            timeoutId = undefined;
            thisArgs = undefined;
            context = undefined;
        }, wait);
    }

    // cancel delayed invocations
    debounced.cancel = () => {
        clearTimeout(timeoutId as number);
        timeoutId = undefined;
        thisArgs = undefined;
        context = undefined;
    };

    debounced.flush = () => {
        if (timeoutId != undefined) {
            func.apply(context, thisArgs);

            clearTimeout(timeoutId as number);
            timeoutId = undefined;
            thisArgs = undefined;
            context = undefined;
        }
    };

    return debounced;
}
