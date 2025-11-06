import { useState } from 'react';
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
   // We would define props types if we wanted to: 1)build props ahead of time,  2) wrap or forward props 3) want type safety in logic or tests

   // do this
   //const mockProps: DepthFirstSearchProps = {
   //  className: 'test-class',
   //  style: { backgroundColor: 'red' },
   //};
   // and component would just be
   // < <BreadthFirstSearch {...mockProps} />

   const [showAlgorithmic, setShowAlgorithmic] = useState(false);
   //    const [showStructural, setShowStructural] = useState(false);
   //    const [showCreational, setShowCreational] = useState(false);

   const handleClickAlgorithmic = () => {
      setShowAlgorithmic((prevShowThis) => {
         return !prevShowThis;
      });
   };
   //    const handleClickStructural = () => {
   //       setShowStructural((prevShowThis) => {
   //          return !prevShowThis;
   //       });
   //    };
   //    const handleClickCreational = () => {
   //       setShowCreational((prevShowThis) => {
   //          return !prevShowThis;
   //       });
   //    };

   return (
      <>
         <GraphTraversal />
        
         <DivideAndConquer />
       
         <Recursion />
       
         <DynamicProgramming />
      
         <GreedyAlgorithms />
     
         <Backtracking />
      
         <SlidingWindow />
      
         <TwoPointers />
        
         <Hashing />
         <button className="d-block m-auto my-2" onClick={handleClickAlgorithmic}>
            {showAlgorithmic ? 'Close ' : 'Open '} Algorithmic Patterns UseCases
         </button>
         {showAlgorithmic ? (
            <div className="my-3">
               <h3 className="bold mt-4">Algorithmic Patterns UseCases</h3>
               <div className="explanation">
                  <p>
                     <b>Sorting Algorithms:</b> Bubble Sort, Insertion Sort, Merge Sort,
                     Quick Sort, Heap Sort, Counting Sort, Radix Sort, Bucket Sort
                  </p>
                  <p>
                     <b>Search Algorithms:</b> Linear Search, Binary Search, Depth-First
                     Search, Breadth-First Search, Dijkstra’s, A* Search
                  </p>
                  <p>
                     <b>Divide and Conquer:</b> Merge Sort, Quick Sort Greedy: Dijkstra’s,
                     Kruskal’s Dynamic Programming: Memoization, Tabulation Backtracking:
                     N-Queens, Sudoku Solver
                  </p>
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </>
   );
}

export default AlgorithmicPatterns;
