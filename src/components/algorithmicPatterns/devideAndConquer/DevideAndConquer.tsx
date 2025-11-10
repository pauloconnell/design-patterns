import React, { useState } from 'react';
import type { CommonProps } from '@types';

const DivideAndConquer = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Divide and Conquer</h1>
         <h2>Recursive Decomposition</h2>
         Divide and Conquer solves problems by breaking them into smaller subproblems, solving each recursively, and combining the results.

         <button
            className="btn btn-primary d-block my-2 mx-auto"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            DivideAndConquer Details:
         </button>

         {showThis ? (
            <div id="divide-conquer">
               <h3>Divide and Conquer:</h3>
               Associated with recursion and efficient problem breakdown
               <h4>Used for Sorting, Searching, and Tree Algorithms</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Merge Sort Example</h5>
                  <b className="explanation">
                     Merge Sort recursively splits the array, sorts each half, and merges them. It’s a classic divide and conquer algorithm.
                  </b>
                  <pre className="text-start d-block">
{`function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}`}</pre>
                  time complexity O(n log n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Binary Search Example</h5>
                  <b className="explanation">
                     Binary Search halves the search space each step. It’s a divide and conquer approach for sorted arrays.
                  </b>
                  <pre className="text-start d-block">
{`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}</pre>
                  time complexity O(log n)
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default DivideAndConquer;
