type ThrottleFunction<T extends any[]> = (...args: T) => any;

// Execute the function at most once every \(X\) milliseconds during a continuous action.

export default function throttle<T extends any[]>(
    func: ThrottleFunction<T>,
    wait: number,
): ThrottleFunction<T> {
    let lastExecTime: number = 0; // Timestamp of the last time func was actually executed

    return function(this: any, ...args: T) {
        const context = this;
        const now = Date.now(); // Current timestamp

        // If enough time has passed since the last execution
        if (now - lastExecTime >= wait) {
            lastExecTime = now; // Mark this as the time of execution
            func.apply(context, args); // Execute the function
        }
    };
}
