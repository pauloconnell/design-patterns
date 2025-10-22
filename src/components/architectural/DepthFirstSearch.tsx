import React, { useState, CSSProperties } from 'react';

// Define the type for the props
type DepthFirstSearchProps = { className?: string; style?: CSSProperties };

const DepthFirstSearch: React.FC<DepthFirstSearchProps> = ({ className, style }) => {
   // Use the useState Hook for state management
   const [showThis, setShowThis] = useState(false);

   // Define the event handler function
   const handleClick = () => {
      // The setter function (setShowThis) updates the state
      // We pass the new value, which is the negation of the current state
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis); // Log the value *after* the change
         return !prevShowThis;
      });

      // Note: console.log("handled ", showThis) here would log the *old* value
      // because state updates are asynchronous.
   };

   return (
      <div className={className} style={style}>
         <h2>Algorithm</h2>
         <h1>Depth First Search</h1>
         <h2>DFS</h2>
         Depth First means to drill down as deep as possible, then backtrack
         <br />
         <button
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
            }}
         >
            DepthFirstSearch Details:
         </button>
         {/* React renders booleans as nothing, so we don't need to explicitly render showThis */}
         {/* {showThis.toString()} // If you wanted to see the boolean as text */}
         {showThis ? (
            <div id="dfs">
               <center>
                  <h3>Depth First Search:</h3>
                  Associated with using a Stack...but we will use recursion instead
                  <h4>Used for Binary Tree traversals</h4>
               </center>
               <div className="my-3">
                  <h5 className="bold">
                     Pre-order
                     <br />
                  </h5>
                  1.Visit node <br />
                  2.traverse left
                  <br />
                  3.traverse right <br />
                  Use recursion to solve these problems. ie traverse = recursive call
                  <br />
                  <code className="text-start d-block">
                     {`let preOrder=function(node) {`} <br />
                     if node==null return
                     <br />
                     <div className="ms-2">
                        visit(node)-ie answer.push(node.val) <br />
                        preOrder(node.left) //recursion
                        <br />
                        preOrder(node.right) // magic
                     </div>
             
                  </code>
             
                  time complexity O(n)
               </div>
               <div className="my-3">
                  <h5 className="bold">
                     In-order -
                     <br />
                  </h5>
                  1.traverse left
                  <br />
                  2.Visit node <br />
                  3.traverse right <br />
                  Using recursion:
                  <br />
                  <code className="text-start d-block">
                     {`let preOrder=function(node) {`} <br />
                     if node==null then return
                     <div className="ms-2">
                        preOrder(node.left) //recursion
                        
                        visit(node)-ie answer.push(node.val) <br />
                        preOrder(node.right) // magic
                     </div>
                     
                  </code>
                    time complexity O(n)
               </div>

               <div className="my-3">
                  <h5 className="bold">
                     Post-order
                     <br />
                  </h5>
                  1.traverse left <br />
                  2.traverse right <br />
                  3.Visit node <br />
                  Using recursion:
                  <br />
                  <code className="text-start d-block">
                     {`let postOrder=function(node) {`}
                     <br />
                     if (node==null) return;
                     <br />
                     <div className="ms-2">
                        postOrder(node.left) //recursion
                        <br />
                        postOrder(node.right) // magic
                        <br />
                        answer.push(node.val) <br />
                     </div>
                  </code>
                  
                  time complexity O(n)
                  
                  
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">`Click button to show details`</div>
         )}
      </div>
   );
};

export default DepthFirstSearch; // Use 'export default' instead of 'module.exports' for modern JS modules
