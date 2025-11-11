import { useState } from 'react';
import '../../styles/design-patterns.css';

import Facade from './structural/Facade';
import Adaptor from './structural/Adaptor';
import Decorator from './structural/Decorator';
import Composite from './structural/Composite';
import Proxy from './structural/Proxy';
import Flyweight from './structural/Flyweight';
import Singleton from './creational/Singleton';
import Builder from './creational/Builder';
import Prototype from './creational/Prototype';

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
         <section className="architectural-section">
            <h2>Architectural Patterns</h2>
            <p className="explanation">
               Architectural patterns define the overall structure of an application.{' '}
               <br />
               They <b>organize systems into layers, modules, or services </b>to improve
               scalability, maintainability, and separation of concerns.
            </p>
            <button className="btn btn-primary d-block m-auto mt-2" onClick={handleClickArchitect}>
               {showArchitectural ? 'Close ' : 'See '} Architectural Patterns
            </button>
            {showArchitectural ? (
               <div className="my-3">
                  <h3 className="bold mt-4">Architectural Patterns</h3>
                  <div className="explanation">
                     <p>
                        <b>Component-Based:</b> UI built from reusable, encapsulated
                        components. Core to React/Vue and scalable frontend architecture. <em>(FE: 10/10, FS: 9/10)</em>
                     </p>
                     <p>
                        <b>Client-Server:</b> Clients request services from centralized
                        servers. Fundamental to web and API-based systems. <em>(FE: 7/10, FS: 10/10)</em>
                     </p>
                     <p>
                        <b>Microservices:</b> App split into independent services with
                        APIs. Enables scalable, modular system design. <em>(FE: 5/10, FS: 10/10)</em>
                     </p>
                     <p>
                        <b>Event-Driven:</b> Components communicate via events and
                        listeners. Ideal for async workflows and reactive UIs. <em>(FE: 9/10, FS: 9/10)</em>
                     </p>
                     <p>
                        <b>MVC (Model-View-Controller):</b> Separates data, UI, and logic.
                        Useful for organizing full-stack applications. <em>(FE: 8/10, FS: 9/10)</em>
                     </p>
                     <p>
                        <b>MVVM (Model-View-ViewModel):</b> ViewModel binds data to View
                        for reactive updates. Mirrors Vue’s reactive model.
                     </p>
                     <p>
                        <b>MVVM (Model-View-ViewModel):</b> ViewModel binds data to View
                        for reactive updates. Mirrors Vue's reactive model. <em>(FE: 9/10, FS: 7/10)</em>
                     </p>
                     <p>
                        <b>Layered Architecture:</b> Code organized into layers (UI,
                        business, data). Helps structure backend-heavy systems. <em>(FE: 6/10, FS: 9/10)</em>
                     </p>
                     <p>
                        <b>Hexagonal (Ports & Adapters):</b> Decouples core logic from
                        external systems. Advanced pattern for clean architecture and
                        testability. <em>(FE: 4/10, FS: 8/10)</em>
                     </p>
                  </div>
               </div>
            ) : (
               <div className="my-2">Click button to show details</div>
            )}
         </section>
         <hr />
         <section className="structural-section">
            <h2 className="pattern-title-structural"> Structural Patterns</h2>

            <div className="my-3">
               <p className="explanation">
                  Structural patterns focus on how components and classes are <b>organized
                  and interact. They help simplify complex systems, promote reusability,
                  and make integration easier</b> by defining clear relationships between
                  parts of an application.
               </p>
               
               <div className="explanation my-4">
                  <h4 className="bold">Common Use Cases:</h4>
                  <p><b>Adapter:</b> API integration, legacy code, third-party libraries <em>(FE: 8/10, FS: 9/10)</em></p>
                  <p><b>Facade:</b> Complex API simplification, service orchestration <em>(FE: 7/10, FS: 9/10)</em></p>
                  <p><b>Decorator:</b> Component enhancement, middleware, feature flags <em>(FE: 9/10, FS: 8/10)</em></p>
                  <p><b>Composite:</b> UI component trees, file systems, nested structures <em>(FE: 10/10, FS: 7/10)</em></p>
                  <p><b>Proxy:</b> Lazy loading, caching, access control, virtual objects <em>(FE: 6/10, FS: 8/10)</em></p>
                  <p><b>Flyweight:</b> Memory optimization, shared resources, large datasets <em>(FE: 4/10, FS: 6/10)</em></p>
               </div>
               <button className="btn btn-primary d-block m-auto mt-2" onClick={handleClickStructural}>
                  {showStructural ? 'Close ' : 'See '} Structural Patterns
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
                     <Adaptor className="pattern-card my-5 mx-1 p-3" />

                     <div className="my-3">
                        <h3 className="bold">Facade</h3>
                        <b className="explanation">
                           The Facade pattern provides a simplified interface to a complex
                           subsystem, making it easier to use and understand. It acts as a
                           high-level interface that hides the complexities of the
                           underlying subsystem, providing a simplified and unified
                           interface to the client.
                        </b>

                        <Facade className="pattern-card my-5 mx-1 p-3" />
                     </div>

                     <Decorator className="pattern-card my-5 mx-1 p-3" />
                     <Composite className="pattern-card my-5 mx-1 p-3" />
                     <Proxy className="pattern-card my-5 mx-1 p-3" />
                     <Flyweight className="pattern-card my-5 mx-1 p-3" />

                     <button
                        className="btn btn-secondary d-block m-auto my-2"
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
         <section className="creational-section">
            <h2 className="pattern-title-creational"> Creational Patterns</h2>

            <div className="my-3">
               <p className="explanation">
                  Creational patterns focus on how objects are created and initialized.
                  They <b>abstract the instantiation process</b> to make systems more flexible,
                  scalable, and decoupled. These patterns help manage object creation
                  logic, especially when it involves complex setup, multiple
                  configurations, or runtime decisions.
               </p>
               
               <div className="explanation my-4">
                  <h4 className="bold">Common Use Cases:</h4>
                  <p><b>Singleton:</b> Global state, config managers, database connections <em>(FE: 7/10, FS: 8/10)</em></p>
                  <p><b>Builder:</b> Complex object construction, form builders, query builders <em>(FE: 8/10, FS: 9/10)</em></p>
                  <p><b>Prototype:</b> Object cloning, templates, performance optimization <em>(FE: 5/10, FS: 6/10)</em></p>
               </div>

               <button className="btn btn-primary d-block m-auto mt-2" onClick={handleClickCreational}>
                  {showCreational ? 'Close ' : 'Show '} Creational Patterns
               </button>

               {showCreational ? (
                  <div className="my-3">
                     <h3 className="bold">Singleton</h3>
                     <Singleton className="pattern-card my-5 mx-1 p-3" />
                     <Builder className="pattern-card my-5 mx-1 p-3" />
                     <Prototype className="pattern-card my-5 mx-1 p-3" />
                  </div>
               ) : (
                  <div className="my-2">Click button to show details</div>
               )}
            </div>
         </section>
         <section className="behavioral-section">
            <h2 className="pattern-title-behavioral">Behavioral Patterns</h2>
            <p className="explanation">
               Behavioral patterns define <b>how objects interact and communicate</b> with each
               other. <br />
               They help manage control flow, encapsulate behavior, and promote
               flexibility in system design and user interactions.
            </p>
            
            <div className="explanation my-4">
               <h4 className="bold">Common Use Cases:</h4>
               <p><b>Observer:</b> Event systems, state management, reactive programming <em>(FE: 10/10, FS: 9/10)</em></p>
               <p><b>Strategy:</b> Algorithm selection, payment methods, sorting options <em>(FE: 8/10, FS: 8/10)</em></p>
               <p><b>Command:</b> Undo/redo, action queues, macro recording <em>(FE: 7/10, FS: 7/10)</em></p>
               <p><b>State:</b> UI state machines, workflow management, game states <em>(FE: 9/10, FS: 7/10)</em></p>
            </div>
            <button className="btn btn-primary d-block m-auto mt-2" onClick={handleClickBehavioral}>
               {showBehavioral ? 'Close ' : 'See '} Behavioral Patterns
            </button>
            {showBehavioral ? (
               <div className="my-3">
                  <h3 className="bold mt-4">Behavioral Patterns</h3>
                  <div className="explanation">
                     <p>
                        <b>Observer:</b> Allows objects to subscribe and react to changes
                        in another object. Useful for event systems and reactive UIs.
                     </p>
                     <p>
                        <b>Strategy:</b> Enables selecting an algorithm at runtime. Great
                        for dynamic behavior like sorting or filtering.
                     </p>
                     <p>
                        <b>Command:</b> Encapsulates a request as an object. Useful for
                        undo/redo functionality and action queues.
                     </p>
                     <p>
                        <b>State:</b> Allows an object to change behavior based on
                        internal state. Ideal for UI components with multiple modes.
                     </p>
                     <p>
                        <b>Chain of Responsibility:</b> Passes a request along a chain of
                        handlers. Good for form validation or middleware pipelines.
                     </p>
                     <p>
                        <b>Template Method:</b> Defines the skeleton of an algorithm,
                        deferring steps to subclasses. Useful for consistent workflows
                        with customizable steps.
                     </p>
                     <p>
                        <b>Mediator:</b> Centralizes communication between objects. Helps
                        reduce coupling in complex systems.
                     </p>
                     <p>
                        <b>Iterator:</b> Provides a way to access elements sequentially
                        without exposing underlying structure. Common in collections and
                        data traversal.
                     </p>
                  </div>
                  <button className="btn btn-secondary d-block m-auto my-2" onClick={handleClickBehavioral}>
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
