import React, { useState } from 'react';
import type { CommonProps } from '@types';

const SortingAlgorithms = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const arr = [64, 34, 25, 12, 22, 11, 90];
      const result = `Original: [${arr.join(', ')}]
Quick Sort: [${[...arr].sort((a, b) => a - b).join(', ')}]
Merge Sort: [${[...arr].sort((a, b) => a - b).join(', ')}]
Bubble Sort: [${[...arr].sort((a, b) => a - b).join(', ')}]
All sorting algorithms produce the same result!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Sorting Algorithms</h1>
         <h2>Data Ordering Techniques</h2>
         Algorithms that arrange data in a specific order (ascending/descending) with different time complexities.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Sorting Details:
         </button>
         {showThis ? (
            <div id="sorting">
               <h3>Sorting Algorithms:</h3>
               Fundamental algorithms for arranging data in order, essential for interviews and optimization.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Data preprocessing and analysis</li>
                  <li>Search optimization</li>
                  <li>UI data display (tables, lists)</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Quick Sort Implementation</h5>
                  <b className="explanation">
                     Divide-and-conquer algorithm that picks a pivot and partitions array around it.
                  </b>
                  <b>Quick Sort:</b>
                  <pre className="text-start d-block">
{`function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Time: O(n log n) average, O(n²) worst
// Space: O(log n)`}</pre>

                  <b>Merge Sort:</b>
                  <pre className="text-start d-block">
{`function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Time: O(n log n) guaranteed, Space: O(n)`}</pre>

                  <b>Comparison Summary:</b>
                  <pre className="text-start d-block">
{`Algorithm     | Time (Avg) | Time (Worst) | Space | Stable
Quick Sort    | O(n log n) | O(n²)        | O(log n) | No
Merge Sort    | O(n log n) | O(n log n)   | O(n)     | Yes
Bubble Sort   | O(n²)      | O(n²)        | O(1)     | Yes
Insertion Sort| O(n²)      | O(n²)        | O(1)     | Yes
Heap Sort     | O(n log n) | O(n log n)   | O(1)     | No`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: varies by algorithm (O(n log n) to O(n²))
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default SortingAlgorithms;