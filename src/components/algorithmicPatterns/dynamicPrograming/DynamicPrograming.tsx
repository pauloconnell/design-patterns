import React, { useState } from 'react';
import type { CSSProperties } from 'react';

type DynamicProgrammingProps = { className?: string; style?: CSSProperties };

const DynamicProgramming: React.FC<DynamicProgrammingProps> = ({ className, style }) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Dynamic Programming</h1>
         <h2>Optimal Substructure + Overlapping Subproblems</h2>
         Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation.

         <button
            className="btn btn-primary"
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
            }}
         >
            DynamicProgramming Details:
         </button>

         {showThis ? (
            <div id="dynamic-programming">
               <h3>Dynamic Programming:</h3>
               A powerful optimization technique using memoization or tabulation.
               <h4>Used for Pathfinding, Optimization, and Counting Problems</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Memoization Example (Top-Down)</h5>
                  <b className="explanation">
                     Stores results of expensive function calls and returns cached results when the same inputs occur again.
                  </b>
                  <pre className="text-start d-block">
{`function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Tabulation Example (Bottom-Up)</h5>
                  <b className="explanation">
                     Builds up a solution iteratively using an array or table.
                  </b>
                  <pre className="text-start d-block">
{`function fib(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">0/1 Knapsack Example</h5>
                  <b className="explanation">
                     Classic DP problem: maximize value without exceeding weight capacity.
                  </b>
                  <pre className="text-start d-block">
{`function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}`}</pre>
                  time complexity O(n × capacity)
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default DynamicProgramming;
