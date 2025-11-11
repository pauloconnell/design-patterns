import { useState } from 'react';
import '../../styles/design-patterns.css';
import GraphTraversal from './graphTraversal/GraphTraversal';
import DivideAndConquer from './devideAndConquer/DevideAndConquer';
import Recursion from './recursion/Recursion';
import DynamicProgramming from './dynamicPrograming/DynamicPrograming';
import Backtracking from './backtracking/Backtracking';
import GreedyAlgorithms from './greedyAlgorithms/GreedyAlgorithms';
import SlidingWindow from './slidingWindow/SlidingWindow';
import TwoPointers from './twoPointers/TwoPointers';
import Hashing from './hashing/Hashing';

function AlgorithmicPatterns() {
   return (
      <>
         <section className="algorithmic-section">
            <h2 className="pattern-title-algorithmic">Algorithmic Patterns</h2>
            
            <p className="explanation">
               Algorithmic patterns are <b>reusable problem-solving approaches</b> that help 
               optimize code efficiency and solve common computational challenges.
            </p>
            
            <div className="explanation my-4">
               <h3 className="bold">Interview-Ready Use Cases:</h3>
               <p>
                  <b>Graph Traversal:</b> DFS, BFS, Topological Sort, Shortest Path, Connected Components <em>(FE: 3/10, FS: 9/10)</em>
               </p>
               <p>
                  <b>Divide and Conquer:</b> Merge Sort, Quick Sort, Binary Search, Maximum Subarray <em>(FE: 5/10, FS: 8/10)</em>
               </p>
               <p>
                  <b>Recursion:</b> Tree Traversal, Factorial, Fibonacci, Tower of Hanoi <em>(FE: 6/10, FS: 8/10)</em>
               </p>
               <p>
                  <b>Dynamic Programming:</b> Knapsack, LCS, Edit Distance, Coin Change, Fibonacci <em>(FE: 4/10, FS: 9/10)</em>
               </p>
               <p>
                  <b>Greedy Algorithms:</b> Activity Selection, Huffman Coding, Dijkstra's, Intervals <em>(FE: 3/10, FS: 7/10)</em>
               </p>
               <p>
                  <b>Backtracking:</b> N-Queens, Sudoku Solver, Permutations, Subset Generation <em>(FE: 2/10, FS: 6/10)</em>
               </p>
               <p>
                  <b>Sliding Window:</b> Maximum Sum Subarray, Longest Substring, Anagram Detection <em>(FE: 8/10, FS: 9/10)</em>
               </p>
               <p>
                  <b>Two Pointers:</b> Pair Sum, Remove Duplicates, Palindrome Check, Merge Arrays <em>(FE: 9/10, FS: 10/10)</em>
               </p>
               <p>
                  <b>Hashing:</b> Frequency Count, LRU Cache, Anagram Groups, Two Sum <em>(FE: 10/10, FS: 10/10)</em>
               </p>
            </div>
            
            <GraphTraversal className="pattern-card my-5 mx-1 p-3" />
            <DivideAndConquer className="pattern-card my-5 mx-1 p-3" />
            <Recursion className="pattern-card my-5 mx-1 p-3" />
            <DynamicProgramming className="pattern-card my-5 mx-1 p-3" />
            <GreedyAlgorithms className="pattern-card my-5 mx-1 p-3" />
            <Backtracking className="pattern-card my-5 mx-1 p-3" />
            <SlidingWindow className="pattern-card my-5 mx-1 p-3" />
            <TwoPointers className="pattern-card my-5 mx-1 p-3" />
            <Hashing className="pattern-card my-5 mx-1 p-3" />
         </section>
      </>
   );
}

export default AlgorithmicPatterns;