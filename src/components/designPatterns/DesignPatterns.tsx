import { useState } from 'react';
import DepthFirstSearch from '../architectural/DepthFirstSearch'; // don't need to type props as they are simple here, but if we did import type DepthFirstSearchProps

import BreadthFirstSearch from '../architectural/BreadthFirstSearch';
import Facade from '../structural/Facade';
import Adaptor from '../structural/Adaptor';
import Singleton from '../creational/Singleton';

function DesignPatterns() {
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
   const [showBehavioral, setShowBehavioral] = useState(false);

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
  const handleClickBehavioral = () => {
      setShowBehavioral((prevShowThis) => {
         return !prevShowThis;
      });
   };

   return (
      <>
      

       
         <section>
            <h2>Architectural Patterns</h2>
            <b className="explanation">
               Architectural patterns define the overall structure of an application.{' '}
               <br />
               They organize systems into layers, modules, or services to improve
               scalability, maintainability, and separation of concerns.
            </b>
            <button className="d-block m-auto mt-2" onClick={handleClickArchitect}>
               See Architectural Patterns
            </button>
            {showArchitectural ? (
               <div className="my-3">
                  <h3 className="bold mt-4">Architectural Patterns</h3>
                    <div className="explanation">
        <p><b>Component-Based:</b> UI built from reusable, encapsulated components. Core to React/Vue and scalable frontend architecture.</p>
        <p><b>Client-Server:</b> Clients request services from centralized servers. Fundamental to web and API-based systems.</p>
        <p><b>Microservices:</b> App split into independent services with APIs. Enables scalable, modular system design.</p>
        <p><b>Event-Driven:</b> Components communicate via events and listeners. Ideal for async workflows and reactive UIs.</p>
        <p><b>MVC (Model-View-Controller):</b> Separates data, UI, and logic. Useful for organizing full-stack applications.</p>
        <p><b>MVVM (Model-View-ViewModel):</b> ViewModel binds data to View for reactive updates. Mirrors Vue’s reactive model.</p>
        <p><b>Layered Architecture:</b> Code organized into layers (UI, business, data). Helps structure backend-heavy systems.</p>
        <p><b>Hexagonal (Ports & Adapters):</b> Decouples core logic from external systems. Advanced pattern for clean architecture and testability.</p>
      </div></div>
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
               <button className="d-block m-auto mt-2" onClick={handleClickStructural}>
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
                     <button
                        className="d-block m-auto my-2"
                        onClick={handleClickStructural}
                     >
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

               <button className="d-block m-auto mT-2" onClick={handleClickCreational}>
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
         <section>
  <h2>Behavioral Patterns</h2>
  <b className="explanation">
    Behavioral patterns define how objects interact and communicate with each other.{' '}
    <br />
    They help manage control flow, encapsulate behavior, and promote flexibility in system design and user interactions.
  </b>
  <button className="d-block m-auto mt-2" onClick={handleClickBehavioral}>
    See Behavioral Patterns
  </button>
  {showBehavioral ? (
    <div className="my-3">
      <h3 className="bold mt-4">Behavioral Patterns</h3>
      <div className="explanation">
        <p><b>Observer:</b> Allows objects to subscribe and react to changes in another object. Useful for event systems and reactive UIs.</p>
        <p><b>Strategy:</b> Enables selecting an algorithm at runtime. Great for dynamic behavior like sorting or filtering.</p>
        <p><b>Command:</b> Encapsulates a request as an object. Useful for undo/redo functionality and action queues.</p>
        <p><b>State:</b> Allows an object to change behavior based on internal state. Ideal for UI components with multiple modes.</p>
        <p><b>Chain of Responsibility:</b> Passes a request along a chain of handlers. Good for form validation or middleware pipelines.</p>
        <p><b>Template Method:</b> Defines the skeleton of an algorithm, deferring steps to subclasses. Useful for consistent workflows with customizable steps.</p>
        <p><b>Mediator:</b> Centralizes communication between objects. Helps reduce coupling in complex systems.</p>
        <p><b>Iterator:</b> Provides a way to access elements sequentially without exposing underlying structure. Common in collections and data traversal.</p>
      </div>
      <button className="d-block m-auto my-2" onClick={handleClickBehavioral}>
        Close Behavioral Patterns
      </button>
    </div>
  ) : (
    <div className="my-2">Click button to show details</div>
  )}
</section>


      </>
   );
}

export default DesignPatterns;
