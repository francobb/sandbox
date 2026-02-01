
import { useEffect, useState } from 'react';
// take in value
// set delay
// cleanup setTimeout
export default function useDebounce(value: string, delay: number) {
    const [debouncedValued, setDebounceValue] = useState(value);

    // need to trigger when values change
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay)
        // cleanup timer for subsequent timers
        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [value, delay])

    // cleanup somehow
    return debouncedValued

}