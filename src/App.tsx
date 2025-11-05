import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';
import AlgorithmicPatterns from './components/algorithmicPatterns/AlgorithmicPatterns';
import DesignPatterns from './components/designPatterns/DesignPatterns';

function App() {
   // We would define props types if we wanted to: 1)build props ahead of time,  2) wrap or forward props 3) want type safety in logic or tests

   // do this
   //const mockProps: DepthFirstSearchProps = {
   //  className: 'test-class',
   //  style: { backgroundColor: 'red' },
   //};
   // and component would just be
   // < <BreadthFirstSearch {...mockProps} />

   const [showDesign, setShowDesign] = useState(false);
   const [showAlgorithmic, setShowAlgorithmic] = useState(false);

   const handleClickDesign = () => {
      setShowDesign((prevShowThis) => {
         return !prevShowThis;
      });
   };
   const handleClickAlgo = () => {
      setShowAlgorithmic((prevShowThis) => {
         return !prevShowThis;
      });
   };

   return (
      <>
         <div>
            <a href="https://vite.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>

         <section>
            <h2>Design Patterns</h2>
            <b className="explanation">
               Design patterns are proven solutions to common software design problems.{' '}
               <br />
               They help developers write cleaner, more maintainable, and scalable code by
               offering reusable strategies for structuring logic, behavior, and
               architecture.
               <br />
               Patterns are typically grouped into categories like creational, structural,
               behavioral, and architectural — each addressing different aspects of
               software design.
            </b>

            <button className="d-block m-auto mt-2" onClick={handleClickDesign}>
              {showDesign ? 'Close' : 'Open'} Design Patterns
            </button>
            {showDesign ? (
               <div className="my-3">
                  <DesignPatterns />
               </div>
            ) : (
               <div className="my-2">Click button to show details</div>
            )}
         </section>
         <hr />
         <section>
            <div className="my-3">
               <h2>Algorithmic Patterns</h2>

               <div className="my-3">
                  <b className="explanation">
                     Algorithmic patterns are common strategies used to solve
                     computational problems efficiently. <br />
                     They help identify optimal approaches for recursion, traversal,
                     dynamic programming, and other problem-solving techniques —
                     especially useful in coding interviews and platforms like LeetCode.
                  </b>
               </div>

               <button className="d-block m-auto mt-2" onClick={handleClickAlgo}>
                  See Algorithmic Patterns
               </button>
               {showAlgorithmic ? (
                  <div className="my-3">
                     <AlgorithmicPatterns />

                     <button className="d-block m-auto my-2" onClick={handleClickAlgo}>
                        Close Structural Patterns
                     </button>
                  </div>
               ) : (
                  <div className="my-2">Click button to show details</div>
               )}
            </div>
            <div className="my-3">
               <h5 className="bold"></h5>
            </div>
         </section>
      </>
   );
}

export default App;
