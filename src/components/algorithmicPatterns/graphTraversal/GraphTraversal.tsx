import { useState } from 'react';
import DepthFirstSearch from './DepthFirstSearch';
import BreadthFirstSearch from './BreadthFirstSearch';
import ShortestPath from './ShortestPath';
import type { CommonProps } from '@types';


function GraphTraversal ({ className, style }: CommonProps)  {
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
         <section className={className} style={style}>
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
                  <ShortestPath className="my-5 mx-1 p-1 border rounded" />
                  
                  <div className="mt-4">
                     <h5>Other Graph Algorithms:</h5>
                     <div className="explanation">
                        <p><b>Topological Sort:</b> Orders nodes by dependencies, used in build systems and task scheduling. <em>(FE: 4/10, FS: 7/10)</em></p>
                        <p><b>Connected Components:</b> Finds isolated groups in networks, useful for social graphs and clustering. <em>(FE: 3/10, FS: 6/10)</em></p>
                        <p><b>Minimum Spanning Tree:</b> Finds cheapest way to connect all nodes, used in network design. <em>(FE: 2/10, FS: 5/10)</em></p>
                     </div>
                  </div>
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
