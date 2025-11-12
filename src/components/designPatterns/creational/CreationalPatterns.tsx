import { useState, useRef } from 'react';
import '../../../styles/design-patterns.css';
import Singleton from './Singleton';
import Builder from './Builder';
import Factory from './Factory';
import Prototype from './Prototype';

function CreationalPatterns() {
   const [showCreational, setShowCreational] = useState(false);
   const sectionRef = useRef<HTMLElement>(null);

   const handleClickCreational = () => {
      setShowCreational((prevShowThis) => {
         if (prevShowThis) {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
         }
         return !prevShowThis;
      });
   };

   return (
      <section className="creational-section" ref={sectionRef}>
         <h2 className="pattern-title-creational">Creational Patterns</h2>
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
            <p><b>Factory:</b> Component creation, API clients, database connections <em>(FE: 9/10, FS: 9/10)</em></p>
            <p><b>Prototype:</b> Object cloning, templates, performance optimization <em>(FE: 5/10, FS: 6/10)</em></p>
         </div>
         <button className="btn btn-primary d-block m-auto mt-2" onClick={handleClickCreational}>
            {showCreational ? 'Close ' : 'Show '} Creational Patterns
         </button>
         {showCreational ? (
            <div className="my-3">
               <Singleton className="pattern-card my-5 mx-1 p-3" />
               <Builder className="pattern-card my-5 mx-1 p-3" />
               <Factory className="pattern-card my-5 mx-1 p-3" />
               <Prototype className="pattern-card my-5 mx-1 p-3" />
               
               <button className="btn btn-secondary d-block m-auto my-2" onClick={handleClickCreational}>
                  Close Creational Patterns
               </button>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
}

export default CreationalPatterns;