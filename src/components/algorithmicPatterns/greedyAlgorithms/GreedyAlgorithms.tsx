import React, { useState } from 'react';
import type { CSSProperties } from 'react';

type GreedyAlgorithmsProps = { className?: string; style?: CSSProperties };

const GreedyAlgorithms: React.FC<GreedyAlgorithmsProps> = ({ className, style }) => {
   const [showThis, setShowThis] = useState(false);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   return (
      <section className={className} style={style}>
         <h1>Greedy Algorithms</h1>
         <h2>Locally Optimal Choices</h2>
         Greedy algorithms build up a solution by choosing the best option at each step, hoping it leads to a globally optimal result.

         <button
              className="btn btn-primary d-block my-2 mx-auto"
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
            }}
         >
            GreedyAlgorithms Details:
         </button>

         {showThis ? (
            <div id="greedy-algorithms">
               <h3>Greedy Algorithms:</h3>
               Fast and intuitive — works when local decisions lead to global optimum.
               <h4>Used for Scheduling, Pathfinding, and Resource Allocation</h4>
               <hr />

               <div className="my-3">
                  <h5 className="bold">Activity Selection Example</h5>
                  <b className="explanation">
                     Select the maximum number of non-overlapping activities sorted by end time.
                  </b>
                  <pre className="text-start d-block">
{`function activitySelection(activities) {
  activities.sort((a, b) => a.end - b.end);
  const result = [activities[0]];
  let lastEnd = activities[0].end;

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].start >= lastEnd) {
      result.push(activities[i]);
      lastEnd = activities[i].end;
    }
  }

  return result;
}`}</pre>
                  time complexity O(n log n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Coin Change (Greedy)</h5>
                  <b className="explanation">
                     Greedy coin change works when denominations are canonical (e.g., US coins).
                  </b>
                  <pre className="text-start d-block">
{`function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  const result = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return amount === 0 ? result : null;
}`}</pre>
                  time complexity O(n)
               </div>

               <hr />
               <div className="my-3">
                  <h5 className="bold">Dijkstra’s Algorithm</h5>
                  <b className="explanation">
                     A greedy approach to finding the shortest path in weighted graphs using a priority queue.
                  </b>
                  <pre className="text-start d-block">
{`function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const pq = new MinPriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();
    if (visited.has(current)) continue;
    visited.add(current);

    for (let [neighbor, weight] of graph[current]) {
      const newDist = distances[current] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
}`}</pre>
                  time complexity O((V + E) log V)
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default GreedyAlgorithms;
