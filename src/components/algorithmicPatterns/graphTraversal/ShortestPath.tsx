import  { useState } from 'react';
import type { CommonProps } from '@types';

const ShortestPath = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Dijkstra's Algorithm Demo:
Start: A
A -> B: distance 4
A -> C: distance 2
C -> D: distance 3
B -> D: distance 1
Shortest path A to D: A -> C -> D (distance: 5)`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Shortest Path Algorithms</h1>
         <h2>Graph Distance Optimization</h2>
         Finds the shortest path between nodes in a weighted graph using algorithms like Dijkstra's or Bellman-Ford.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Shortest Path Details:
         </button>
         {showThis ? (
            <div id="shortest-path">
               <h3>Shortest Path Algorithms:</h3>
               Algorithms that find the minimum cost path between nodes in a weighted graph.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>GPS navigation and route planning</li>
                  <li>Network routing protocols</li>
                  <li>Game pathfinding (A*)</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Dijkstra's Algorithm</h5>
                  <b className="explanation">
                     Finds shortest paths from a source vertex to all other vertices in a weighted graph.
                  </b>
                  <b>Graph Representation:</b>
                  <pre className="text-start d-block">
{`interface Edge {
  to: string;
  weight: number;
}

type Graph = Map<string, Edge[]>;

const graph: Graph = new Map([
  ['A', [{ to: 'B', weight: 4 }, { to: 'C', weight: 2 }]],
  ['B', [{ to: 'D', weight: 1 }]],
  ['C', [{ to: 'D', weight: 3 }]],
  ['D', []]
]);`}</pre>

                  <b>Dijkstra's Implementation:</b>
                  <pre className="text-start d-block">
{`function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const visited = new Set<string>();
  const pq = new PriorityQueue<{node: string, dist: number}>();
  
  // Initialize distances
  for (const node of graph.keys()) {
    distances.set(node, node === start ? 0 : Infinity);
  }
  
  pq.enqueue({ node: start, dist: 0 });
  
  while (!pq.isEmpty()) {
    const { node, dist } = pq.dequeue();
    
    if (visited.has(node)) continue;
    visited.add(node);
    
    const neighbors = graph.get(node) || [];
    for (const edge of neighbors) {
      const newDist = dist + edge.weight;
      if (newDist < distances.get(edge.to)!) {
        distances.set(edge.to, newDist);
        pq.enqueue({ node: edge.to, dist: newDist });
      }
    }
  }
  
  return distances;
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const distances = dijkstra(graph, 'A');
console.log('Shortest distance A to D:', distances.get('D')); // 5

// For path reconstruction, track predecessors
function getShortestPath(predecessors: Map<string, string>, target: string): string[] {
  const path = [];
  let current = target;
  while (current) {
    path.unshift(current);
    current = predecessors.get(current)!;
  }
  return path;
}`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O((V + E) log V) with priority queue
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default ShortestPath;