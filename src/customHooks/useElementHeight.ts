import { useEffect, useRef } from 'react';

/**
 * All elements heights.
 */
export let heights: Map<string, number> = new Map();
let allHeights: number = 0;

/**
 * Allows storing the element's height to be used anywhere by the given export *heights*
 * @param key The elements unique key to be used to store its height
 * @param verticalMargin The referenced element's vertical margin
 * @returns a ref and the total sum of all elements heights
 */
export const useElementHeight = (key: string, verticalMargin: number = 0) => {
  const elRef = useRef<HTMLElement>();
  useEffect(() => {
    if (elRef.current && !heights.has(key)) {
      const h = elRef.current?.offsetHeight + verticalMargin;
      console.log(111, key, h);
      heights.set(key, h);
      allHeights += h;
    }
    return () => {
      allHeights -= heights.get(key) || 0;
      heights.delete(key);
    };
  }, [key, verticalMargin]);
  return { ref: elRef, allHeights };
};
