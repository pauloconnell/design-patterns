import  { useState } from 'react';
import type { CommonProps } from '@types';

const Recursion = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Recursion</h1>
         <h2>Self-Referential Function Calls</h2>
         Recursion solves problems by having a function call itself with a smaller input until a base case is reached.

         <button
            className="btn btn-primary d-block my-2 mx-auto"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            Recursion Details:
         </button>

         {showThis ? (
            <div id="recursion">
               <h3>Recursion:</h3>
               A powerful technique for solving problems that can be broken into similar subproblems.
               <h4>Used for Tree Traversals, Backtracking, Divide and Conquer</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Factorial Example</h5>
                  <b className="explanation">
                     A classic example where the function calls itself to compute factorial of a number.
                  </b>
                  <pre className="text-start d-block">
{`function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Fibonacci Example</h5>
                  <b className="explanation">
                     Recursive Fibonacci is simple but inefficient — a great candidate for memoization.
                  </b>
                  <pre className="text-start d-block">
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}</pre>
                  time complexity O(2ⁿ) without memoization
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Recursive Tree Traversal</h5>
                  <b className="explanation">
                     Recursion is ideal for traversing hierarchical structures like trees.
                  </b>
                  <pre className="text-start d-block">
{`function inorderTraversal(node) {
  if (!node) return;
  inorderTraversal(node.left);
  console.log(node.value);
  inorderTraversal(node.right);
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

export default Recursion