import { useState, useRef } from 'react';
import '../../../styles/design-patterns.css';
import Adaptor from './Adaptor';
import Facade from './Facade';
import Decorator from './Decorator';
import Composite from './Composite';
import Proxy from './Proxy';
import Flyweight from './Flyweight';

function StructuralPatterns() {
   const [showStructural, setShowStructural] = useState(false);
   const sectionRef = useRef<HTMLElement>(null);

   const handleClickStructural = () => {
      setShowStructural((prevShowThis) => {
         if (prevShowThis) {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
         }
         return !prevShowThis;
      });
   };

   return (
      <section className="structural-section" ref={sectionRef}>
         <h2 className="pattern-title-structural">Structural Patterns</h2>
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
               <Adaptor className="pattern-card my-5 mx-1 p-3" />
               <Facade className="pattern-card my-5 mx-1 p-3" />
               <Decorator className="pattern-card my-5 mx-1 p-3" />
               <Composite className="pattern-card my-5 mx-1 p-3" />
               <Proxy className="pattern-card my-5 mx-1 p-3" />
               <Flyweight className="pattern-card my-5 mx-1 p-3" />
               
               <button className="btn btn-secondary d-block m-auto my-2" onClick={handleClickStructural}>
                  Close Structural Patterns
               </button>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
}

export default StructuralPatterns;