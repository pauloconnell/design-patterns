import { useState } from 'react';
import DepthFirstSearch from './DepthFirstSearch'; // don't need to type props as they are simple here, but if we did import type DepthFirstSearchProps

import BreadthFirstSearch from './BreadthFirstSearch';

function GraphTraversal() {
   // We would define props types if we wanted to: 1)build props ahead of time,  2) wrap or forward props 3) want type safety in logic or tests

   // do this
   //const mockProps: DepthFirstSearchProps = {
   //  className: 'test-class',
   //  style: { backgroundColor: 'red' },
   //};
   // and component would just be
   // < <BreadthFirstSearch {...mockProps} />

   const [showGraph, setShowGraph] = useState(false);
   //    const [showStructural, setShowStructural] = useState(false);
   //    const [showCreational, setShowCreational] = useState(false);

   const handleClickGraph = () => {
      setShowGraph((prevShowThis) => {
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
         <section>
            <h1 className="bold">Graph Traversal</h1>
            <p className="explanation">
               Graph traversal is a process of <b>visiting each node in a graph</b> data
               structure, such as a tree or a graph. DFS, BFS, Inorder, Postorder, etc.
               Useful for routing, DOM trees, permission hierarchies, and dependency graphs.
            </p>
            {showGraph ? (
               <div>
                  <DepthFirstSearch className="my-5 mx-1 p-1 border rounded" />
                  <BreadthFirstSearch className="my-5 mx-1 p-1 border rounded" />
               </div>
            ) : (
               <div className="my-2">Click button to show details</div>
            )}

            <button className="d-block m-auto my-2" onClick={handleClickGraph}>
               {showGraph ? 'Close ' : 'See '} Graph Patterns
            </button>
         </section>
      </>
   );
}

export default GraphTraversal;
