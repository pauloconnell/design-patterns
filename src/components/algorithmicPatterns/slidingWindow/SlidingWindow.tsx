import React, { useState } from 'react';
import type { CSSProperties } from 'react';

type SlidingWindowProps = { className?: string; style?: CSSProperties };

const SlidingWindow: React.FC<SlidingWindowProps> = ({ className, style }) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Sliding Window</h1>
         <h2>Efficient Range-Based Processing</h2>
         The sliding window technique maintains a subset of data that moves across a collection to optimize time-based or range-based operations.

         <button
            className="btn btn-primary"
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
            }}
         >
            SlidingWindow Details:
         </button>

         {showThis ? (
            <div id="sliding-window">
               <h3>Sliding Window:</h3>
               Ideal for problems involving subarrays, substrings, or real-time data streams.
               <h4>Used for Maximum/Minimum Ranges, Frequency Tracking, and Streaming Analytics</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Max Sum Subarray of Size K</h5>
                  <b className="explanation">
                     Find the maximum sum of any contiguous subarray of size k.
                  </b>
                  <pre className="text-start d-block">
{`function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Longest Substring Without Repeating Characters</h5>
                  <b className="explanation">
                     Uses a dynamic window to track unique characters and expand/shrink as needed.
                  </b>
                  <pre className="text-start d-block">
{`function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Minimum Window Substring</h5>
                  <b className="explanation">
                     Finds the smallest substring containing all characters of a target string.
                  </b>
                  <pre className="text-start d-block">
{`function minWindow(s, t) {
  const need = new Map();
  for (let char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  let left = 0, right = 0, count = t.length;
  let minLen = Infinity, start = 0;

  while (right < s.length) {
    if (need.has(s[right])) {
      if (need.get(s[right]) > 0) count--;
      need.set(s[right], need.get(s[right]) - 1);
    }
    right++;

    while (count === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }
      if (need.has(s[left])) {
        need.set(s[left], need.get(s[left]) + 1);
        if (need.get(s[left]) > 0) count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}`}</pre>
                  time complexity O(n)
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default SlidingWindow;
