import React, { useState } from 'react';
import type { CommonProps } from '@types';

const TwoPointers = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Two Pointers</h1>
         <h2>Dual Index Scanning</h2>
         The two pointers technique uses two indices to scan or compare elements in a collection efficiently, often from opposite ends or staggered positions.

         <button
            className="btn btn-primary d-block mx-auto my-2"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            TwoPointers Details:
         </button>

         {showThis ? (
            <div id="two-pointers">
               <h3>Two Pointers:</h3>
               Efficient for problems involving sorted arrays, partitions, and comparisons.
               <h4>Used for Merging, Searching, and Windowed Comparisons</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Sorted Array: Pair Sum</h5>
                  <b className="explanation">
                     Find if any two numbers in a sorted array sum to a target value.
                  </b>
                  <pre className="text-start d-block">
{`function hasPairWithSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;
    else if (sum < target) left++;
    else right--;
  }
  return false;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Remove Duplicates from Sorted Array</h5>
                  <b className="explanation">
                     Use slow and fast pointers to overwrite duplicates in-place.
                  </b>
                  <pre className="text-start d-block">
{`function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Merge Two Sorted Arrays</h5>
                  <b className="explanation">
                     Merge two sorted arrays into one sorted array using two pointers.
                  </b>
                  <pre className="text-start d-block">
{`function mergeSortedArrays(a, b) {
  const result = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }

  return result.concat(a.slice(i)).concat(b.slice(j));
}`}</pre>
                  time complexity O(n + m)
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default TwoPointers;
