import { useState } from 'react';
import '../../styles/design-patterns.css';

function ArchitecturalPatterns() {
   const [showArchitectural, setShowArchitectural] = useState(false);

   const handleClickArchitect = () => {
      setShowArchitectural((prevShowThis) => {
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
      </>
   );
}

export default ArchitecturalPatterns;