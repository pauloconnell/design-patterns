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
import Factory from './creational/Factory';
import BehavioralPatterns from './behavioural/BehavioralPatterns';

function DesignPatterns() {
   // We would define props types if we wanted to: 1)build props ahead of time,  2) wrap or forward props 3) want type safety in logic or tests

   // do this
   //const mockProps: DepthFirstSearchProps = {
   //  className: 'test-class',
   //  style: { backgroundColor: 'red' },
   //};
   // and component would just be
   // < <BreadthFirstSearch {...mockProps} />

   // const [showArchitectural, setShowArchitectural] = useState(false);
   const [showStructural, setShowStructural] = useState(false);
   const [showCreational, setShowCreational] = useState(false);
   const handleClickStructural = () => {
      setShowStructural((prevShowThis) => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
         return !prevShowThis;
      });
   };
   const handleClickCreational = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowCreational((prevShowThis) => {
         return !prevShowThis;
      });
   };

   return (
      <>
         <section className="structural-section">
            <h2 className="pattern-title-structural"> Structural Patterns</h2>

            <div className="my-3">
               <p className="explanation">
                  Structural patterns focus on how components and classes are{' '}
                  <b>
                     organized and interact. They help simplify complex systems, promote
                     reusability, and make integration easier
                  </b>{' '}
                  by defining clear relationships between parts of an application.
               </p>

               <div className="explanation my-4">
                  <h4 className="bold">Common Use Cases:</h4>
                  <p>
                     <b>Adapter:</b> API integration, legacy code, third-party libraries{' '}
                     <em>(FE: 8/10, FS: 9/10)</em>
                  </p>
                  <p>
                     <b>Facade:</b> Complex API simplification, service orchestration{' '}
                     <em>(FE: 7/10, FS: 9/10)</em>
                  </p>
                  <p>
                     <b>Decorator:</b> Component enhancement, middleware, feature flags{' '}
                     <em>(FE: 9/10, FS: 8/10)</em>
                  </p>
                  <p>
                     <b>Composite:</b> UI component trees, file systems, nested structures{' '}
                     <em>(FE: 10/10, FS: 7/10)</em>
                  </p>
                  <p>
                     <b>Proxy:</b> Lazy loading, caching, access control, virtual objects{' '}
                     <em>(FE: 6/10, FS: 8/10)</em>
                  </p>
                  <p>
                     <b>Flyweight:</b> Memory optimization, shared resources, large
                     datasets <em>(FE: 4/10, FS: 6/10)</em>
                  </p>
               </div>
               <button
                  className="btn btn-primary d-block m-auto mt-2"
                  onClick={handleClickStructural}
               >
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
         </section>
         <hr />
         <section className="creational-section">
            <h2 className="pattern-title-creational"> Creational Patterns</h2>

            <div className="my-3">
               <p className="explanation">
                  Creational patterns focus on how objects are created and initialized.
                  They <b>abstract the instantiation process</b> to make systems more
                  flexible, scalable, and decoupled. These patterns help manage object
                  creation logic, especially when it involves complex setup, multiple
                  configurations, or runtime decisions.
               </p>

               <div className="explanation my-4">
                  <h4 className="bold">Common Use Cases:</h4>
                  <p>
                     <b>Singleton:</b> Global state, config managers, database connections{' '}
                     <em>(FE: 7/10, FS: 8/10)</em>
                  </p>
                  <p>
                     <b>Builder:</b> Complex object construction, form builders, query
                     builders <em>(FE: 8/10, FS: 9/10)</em>
                  </p>
                  <p>
                     <b>Factory:</b> Component creation, API clients, database connections{' '}
                     <em>(FE: 9/10, FS: 9/10)</em>
                  </p>
                  <p>
                     <b>Prototype:</b> Object cloning, templates, performance optimization{' '}
                     <em>(FE: 5/10, FS: 6/10)</em>
                  </p>
               </div>

               <button
                  className="btn btn-primary d-block m-auto mt-2"
                  onClick={handleClickCreational}
               >
                  {showCreational ? 'Close ' : 'Show '} Creational Patterns
               </button>

               {showCreational ? (
                  <div className="my-3">
                     <h3 className="bold">Singleton</h3>
                     <Singleton className="pattern-card my-5 mx-1 p-3" />
                     <Builder className="pattern-card my-5 mx-1 p-3" />
                     <Factory className="pattern-card my-5 mx-1 p-3" />
                     <Prototype className="pattern-card my-5 mx-1 p-3" />
                  </div>
               ) : (
                  <div className="my-2">Click button to show details</div>
               )}
            </div>
         </section>
         <BehavioralPatterns />
      </>
   );
}

export default DesignPatterns;
