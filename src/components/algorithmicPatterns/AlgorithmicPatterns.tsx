import { useState } from 'react';
import DepthFirstSearch from '../architectural/DepthFirstSearch'; // don't need to type props as they are simple here, but if we did import type DepthFirstSearchProps

import BreadthFirstSearch from '../architectural/BreadthFirstSearch';

function AlgorithmicPatterns() {
   // We would define props types if we wanted to: 1)build props ahead of time,  2) wrap or forward props 3) want type safety in logic or tests

   // do this
   //const mockProps: DepthFirstSearchProps = {
   //  className: 'test-class',
   //  style: { backgroundColor: 'red' },
   //};
   // and component would just be
   // < <BreadthFirstSearch {...mockProps} />

    const [showArchitectural, setShowArchitectural] = useState(false);
//    const [showStructural, setShowStructural] = useState(false);
//    const [showCreational, setShowCreational] = useState(false);

    const handleClickArchitect = () => {
       setShowArchitectural((prevShowThis) => {
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

         <h1>Algorithmic Patterns:</h1>
         <hr />
         <section>
            Graph Traversal: DFS, BFS, Inorder, Postorder, etc.
            <h3 className="bold">Graph Traversal</h3>
            <b className="explanation">
               Graph traversal is a process of visiting each node in a graph data
               structure, such as a tree or a graph.
            </b>
            <DepthFirstSearch className="my-5 mx-1 p-1 border rounded" />
            <BreadthFirstSearch className="my-5 mx-1 p-1 border rounded" />
            <button className="d-block m-auto my-2" onClick={handleClickArchitect}>
               Close Architectural Patterns
            </button>
            Divide and Conquer: Merge Sort, Quick Sort Greedy: Dijkstra’s, Kruskal’s
            Dynamic Programming: Memoization, Tabulation Backtracking: N-Queens, Sudoku
            Solver
         </section>
      </>
   );
}

export default AlgorithmicPatterns;
