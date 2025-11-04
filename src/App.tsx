import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';
import DepthFirstSearch from './components/architectural/DepthFirstSearch'; // don't need to type props as they are simple here, but if we did import type DepthFirstSearchProps

import BreadthFirstSearch from './components/architectural/BreadthFirstSearch';
import Facade from './components/structural/Facade';
import Adaptor from './components/structural/Adaptor';
import Singleton from './components/creational/Singleton';

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
   const [showStructural, setShowStructural] = useState(false);
   const [showCreational, setShowCreational] = useState(false);

   const handleClickArchitect = () => {
      setShowArchitectural((prevShowThis) => {
         return !prevShowThis;
      });
   };
   const handleClickStructural = () => {
      setShowStructural((prevShowThis) => {
         return !prevShowThis;
      });
   };
   const handleClickCreational = () => {
      setShowCreational((prevShowThis) => {
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

         <h1>Design Patterns:</h1>
         <hr />
         <section>
            <h2>Architectural Patterns</h2>
            <b className="explanation">
               Architectural patterns define the overall structure of an application.{' '}
               <br />
               They organize systems into layers, modules, or services to improve
               scalability, maintainability, and separation of concerns.
            </b>
            <button className="d-block m-auto" onClick={handleClickArchitect}>
               See Architectural Patterns
            </button>
            {showArchitectural ? (
               <div className="my-3">
                  <h3 className="bold">Graph Traversal</h3>
                  <b className="explanation">
                     Graph traversal is a process of visiting each node in a graph data
                     structure, such as a tree or a graph.
                  </b>

                  <DepthFirstSearch className="my-5 mx-1 p-1 border rounded" />
                  <BreadthFirstSearch className="my-5 mx-1 p-1 border rounded" />
                      <button className="d-block m-auto" onClick={handleClickArchitect}>
                 Close Architectural Patterns
               </button>
               </div>

            ) : (
               <div className="my-2">Click button to show details</div>
            )}
         
         </section>
         <hr />
         <section>
            <h2> Structural Patterns</h2>

            <div className="my-3">
               <b className="explanation">
                  Structural patterns focus on how components and classes are organized
                  and interact. They help simplify complex systems, promote reusability,
                  and make integration easier by defining clear relationships between
                  parts of an application.
               </b>
               <button className="d-block m-auto" onClick={handleClickStructural}>
                  See Structural Patterns
               </button>
               {showStructural ? (
                  <div className="my-3">
                     <h3 className="bold">Adapter</h3>
                     <b className="explanation">
                        The Adapter pattern is a structural design pattern that allows
                        objects with incompatible interfaces to work together. It acts as
                        a bridge between two incompatible interfaces, converting the
                        interface of one class into another interface that a client
                        expects.
                     </b>
                     <Adaptor className="my-5 mx-1 p-1 border rounded" />

                     <div className="my-3">
                        <h3 className="bold">Facade</h3>
                        <b className="explanation">
                           The Facade pattern provides a simplified interface to a complex
                           subsystem, making it easier to use and understand. It acts as a
                           high-level interface that hides the complexities of the
                           underlying subsystem, providing a simplified and unified
                           interface to the client.
                        </b>

                        <Facade className="my-5 mx-1 p-1 border rounded" />

                     </div>
                      <button className="d-block m-auto" onClick={handleClickStructural}>
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
         <hr />
         <section>
            <h2> Creational Patterns</h2>

            <div className="my-3">
               <b className="explanation"></b>

               <button className="d-block m-auto" onClick={handleClickCreational}>
                  See Creational Patterns
               </button>

               {showCreational ? (
                  <div className="my-3">
                     <h3 className="bold">Singleton</h3>
                     <Singleton className="my-5 mx-1 p-1 border rounded" />
                  </div>
               ) : (
                  <div className="my-2">Click button to show details</div>
               )}
            </div>
         </section>
      </>
   );
}

export default App;
