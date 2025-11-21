import  { useState } from 'react';
import type { CommonProps } from '@types';

const BreadthFirstSearch = ({ className, style }: CommonProps) => {
   // Use the useState Hook for state management
   const [showThis, setShowThis] = useState(false);

   // Define the event handler function
   const handleClick = ():void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Breadth First Search</h1>
         <h2>BFS (Queue - FIFO)</h2>
         Breadth First means to explore all neighbors at the current depth before going deeper
         <br />
         <button
            className="btn btn-primary"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            BreadthFirstSearch Details:
         </button>
         {showThis ? (
            <div id="bfs">
               <h3>Breadth First Search:</h3>
               Associated with using a Queue
               <h4>Used for Shortest Path in Unweighted Graphs</h4>
               <hr />
               <div className="my-3">
                  <h5 className="bold">BFS Traversal</h5>
                  <b className="explanation">
                     BFS explores nodes level by level, making it ideal for finding the shortest path in unweighted graphs.
                  </b>
                  1. Enqueue starting node (with path for shortest path - [node, path])<br />
                  2. While queue is not empty:
                  <br />
                  &nbsp;&nbsp;a. Dequeue node and visit it
                  <br />
                  &nbsp;&nbsp;b. Enqueue all unvisited neighbors
                  <br />
                  <br />
                  <code className="text-start d-block">
                     {`let bfs = function(startNode) {`} <br />
                     <div className="ms-2">
                        const queue = [startNode]; <br />
                        const visited = new Set(); <br />
                        {'while (queue.length > 0) {'} <br />
                        &nbsp;&nbsp;const node = queue.shift(); <br />
                        &nbsp;&nbsp;if (!visited.has(node)) {'{'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;visited.add(node); <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;for (let neighbor of node.neighbors) {'{'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.push(neighbor); <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'}'} <br />
                        &nbsp;&nbsp;{'}'} <br />
                        {'}'} <br />
                     </div>
                     {'}'}
                  </code>
                  time complexity O(V + E)
               </div>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Shortest Path Example</h5>
                  <b className="explanation">
                     BFS guarantees the shortest path in terms of number of edges in an unweighted graph.
                  </b>
                  <code className="text-start d-block">
                     {`let bfsShortestPath = function(start, end) {`} <br />
                     <div className="ms-2">
                        const queue = [[start, [start]]]; // queue format is [node, path]<br />
                        const visited = new Set(); <br />
                        {'while (queue.length > 0) {'} <br />
                        &nbsp;&nbsp;const [node, path] = queue.shift(); <br />
                        &nbsp;&nbsp;if (node === end) return path; <br />
                        &nbsp;&nbsp;if (!visited.has(node)) {'{'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;visited.add(node); <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;for (let neighbor of node.neighbors) {'{'} <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.push([neighbor, [...path, neighbor]]);  // NOTE: add neighbor to it's path<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'}'} <br />
                        &nbsp;&nbsp;{'}'} <br />
                        {'}'} <br />
                        return null; // no path found <br />
                     </div>
                     {'}'}
                  </code>
                  time complexity O(V + E)
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default BreadthFirstSearch;
