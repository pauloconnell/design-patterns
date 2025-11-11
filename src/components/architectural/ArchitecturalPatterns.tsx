import { useState } from 'react';
import '../../styles/design-patterns.css';
import ComponentBased from './ComponentBased';
import MVC from './MVC';
import EventDriven from './EventDriven';
import Microservices from './Microservices';

function ArchitecturalPatterns() {
   const [activePattern, setActivePattern] = useState<string | null>(null);

   const patterns = [
      { name: 'Component-Based', component: ComponentBased, importance: 'FE: 10/10, FS: 9/10' },
      { name: 'MVC', component: MVC, importance: 'FE: 8/10, FS: 9/10' },
      { name: 'Event-Driven', component: EventDriven, importance: 'FE: 9/10, FS: 9/10' },
      { name: 'Microservices', component: Microservices, importance: 'FE: 5/10, FS: 10/10' }
   ];

   const togglePattern = (patternName: string) => {
      setActivePattern(activePattern === patternName ? null : patternName);
   };

   return (
      <section className="architectural-section">
         <h3>Architectural Patterns</h3>
         <p className="explanation">
            Architectural patterns define the overall structure of an application.
            They organize systems into layers, modules, or services to improve scalability and maintainability.
         </p>
         
         <div className="patterns-grid">
            {patterns.map(({ name, component: PatternComponent, importance }) => (
               <div key={name} className="pattern-item">
                  <button 
                     className="btn btn-primary d-block mx-auto my-2"
                     onClick={() => {togglePattern(name)}}
                  >
                     {name} ({importance})
                  </button>
                  
                  {activePattern === name && (
                     <div className="pattern-details">
                        <PatternComponent className="pattern-card my-5 mx-1 p-3"/>
                        <button 
                           className="btn btn-secondary d-block mx-auto mt-3"
                           onClick={() => {setActivePattern(null)}}
                        >
                           Close {name}
                        </button>
                     </div>
                  )}
               </div>
            ))}
         </div>
         
         <div className="mt-4">
            <h5>Other Important Patterns:</h5>
            <div className="explanation">
               <p><b>Client-Server:</b> Clients request services from centralized servers. <em>(FE: 7/10, FS: 10/10)</em></p>
               <p><b>MVVM:</b> ViewModel binds data to View for reactive updates. <em>(FE: 9/10, FS: 7/10)</em></p>
               <p><b>Layered Architecture:</b> Code organized into layers (UI, business, data). <em>(FE: 6/10, FS: 9/10)</em></p>
               <p><b>Hexagonal:</b> Decouples core logic from external systems. <em>(FE: 4/10, FS: 8/10)</em></p>
            </div>
         </div>
      </section>
   );
}

export default ArchitecturalPatterns;