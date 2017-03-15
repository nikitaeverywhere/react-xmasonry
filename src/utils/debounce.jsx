/**
 * Returns the same function but safe to call multiple times. The first time execution delays until
 * the next frame. All the next calls will trigger the function in the next frame as well.
 * @param {function} f - Function to de-bounce.
 * @returns {function}
 */
export default function debounce (f) {
    let timeout = 0;
    return () => {
        if (timeout !== 0)
            return;
        timeout = requestAnimationFrame(() => { // ~1-33ms
            timeout = 0;
            f();
        });
    }
}