import { useEffect, useState } from 'react'

/**
 * React hook for media queries.
 * Useful for determining width of components
 * @param {string[]} [queries] Array of media queries
 * @param {number[]} [values] Column count
 * @param {number} [defaultValue] Default column count
 * @returns {number} The Current with
 */
export default function useMedia(
  queries: string[],
  values: number[],
  defaultValue: number
): number {
  // State update function
  const match = () => {
    // Get first media query that matches
    const query = queries.findIndex((q) => matchMedia(q).matches)

    // Return related value or defaultValue if none
    return values[query] || defaultValue
  }

  // State and setter for current value
  const [value, set] = useState(match)

  useEffect(() => {
    // Update state on window resize
    // Usage of match function defined outside of useEffect ...
    // ... ensures that it has current values of arguments.
    const handler = () => set(match)

    window.addEventListener('resize', handler)

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handler)
  }, []) // Empty array ensures effect is only run on mount and unmount

  return value
}
