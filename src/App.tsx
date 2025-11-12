import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import tsLogo from './assets/typescript-96.png';
import './App.css';
import { useState } from 'react';
import ArchitecturalPatterns from './components/architectural/ArchitecturalPatterns';
import DesignPatterns from './components/designPatterns/DesignPatterns';
import AlgorithmicPatterns from './components/algorithmicPatterns/AlgorithmicPatterns';

function App() {
   // We would define props types if we wanted to: 1)build props ahead of time,  2) wrap or forward props 3) want type safety in logic or tests

   // do this
   //const mockProps: DepthFirstSearchProps = {
   //  className: 'test-class',
   //  style: { backgroundColor: 'red' },
   //};
   // and component would just be
   // < <BreadthFirstSearch {...mockProps} />

   const [showArchitectural, setShowArchitectural] = useState(false);
   const [showDesign, setShowDesign] = useState(false);
   const [showAlgorithmic, setShowAlgorithmic] = useState(false);

   const handleClickArchitectural = () => {
      setShowArchitectural((prevShowThis) => {
         return !prevShowThis;
      });
   };
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
            <a href="https://www.typescriptlang.org/" target="_blank">
               <img src={tsLogo} className="logo TS" alt="TS logo" />
            </a>
         </div>
         <section>
            <h2>Design Patterns</h2>
            <div className="explanation">
               Design patterns are proven solutions to common software design problems.{' '}
               <br />
               They help developers write cleaner, more maintainable, and scalable code by
               offering reusable strategies for structuring logic, behavior, and
               architecture.
               <br />
               Patterns are typically grouped into categories like{' '}
               <b> creational, structural, behavioral, and architectural </b> — each
               addressing different aspects of software design.
            </div>

            <button className="d-block m-auto mt-2" onClick={handleClickDesign}>
               {showDesign ? 'Close' : 'Open'} Design Patterns
            </button>
            {showDesign ? (
               <div className="my-3">
                  <DesignPatterns />
                  <button className="d-block m-auto mt-2" onClick={handleClickDesign}>
                     Close Design Patterns
                  </button>
               </div>
            ) : (
               <div className="my-2">Click button to show details</div>
            )}
         </section>

         <hr />
         <section>
            <h2>Architectural Patterns</h2>
            <div className="explanation">
               Architectural patterns define the overall structure and organization of
               software systems.
               <br />
               They provide high-level blueprints for{' '}
               <b>system architecture, component interaction, and scalable design</b> —
               essential for building robust, maintainable applications.
               <br />
               Common use cases include{' '}
               <b>
                  React component hierarchies, microservices design, MVC web applications,
                  and event-driven systems
               </b>{' '}
               for modern development.
            </div>

            <button className="d-block m-auto mt-2" onClick={handleClickArchitectural}>
               {showArchitectural ? 'Close' : 'Open'} Architectural Patterns
            </button>
            {showArchitectural ? (
               <div className="my-3">
                  <ArchitecturalPatterns />
                  <button
                     className="d-block m-auto mt-2"
                     onClick={handleClickArchitectural}
                  >
                     Close Architectural Patterns
                  </button>
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
                  <p className="explanation">
                     Algorithmic patterns are common strategies used to solve
                     computational problems efficiently. <br />
                     They help identify optimal approaches for{' '}
                     <b>
                        recursion, traversal, dynamic programming, and other
                        problem-solving techniques
                     </b>{' '}
                     — especially useful in coding interviews and platforms like LeetCode.
                  </p>
               </div>

               <button className="d-block m-auto mt-2" onClick={handleClickAlgo}>
                  {showAlgorithmic ? 'Close ' : 'See '}Algorithmic Patterns
               </button>
               {showAlgorithmic ? (
                  <div className="my-3">
                     <AlgorithmicPatterns />

                     <button className="d-block m-auto my-2" onClick={handleClickAlgo}>
                        Close Algorithmic Patterns
                     </button>
                  </div>
               ) : (
                  <div className="my-2">Click button to show details</div>
               )}
            </div>
         </section>

         <footer>
            <a target="_blank" href="https://icons8.com/icon/Xf1sHBmY73hA/typescript">
               TypeScript
            </a>{' '}
            icon by{' '}
            <a target="_blank" href="https://icons8.com">
               Icons8
            </a>
         </footer>
      </>
   );
}

export default App;
