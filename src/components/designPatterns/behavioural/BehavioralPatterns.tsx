import { useState } from 'react';
import '../../../styles/design-patterns.css';
import Observer from './Observer';
import Strategy from './Strategy';
import Command from './Command';
import State from './State';

function BehavioralPatterns() {
   const [showBehavioral, setShowBehavioral] = useState(false);

   const handleClickBehavioral = () => {
      setShowBehavioral((prevShowThis) => {
         return !prevShowThis;
      });
   };

   return (
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
               <Observer className="pattern-card my-5 mx-1 p-3" />
               <Strategy className="pattern-card my-5 mx-1 p-3" />
               <Command className="pattern-card my-5 mx-1 p-3" />
               <State className="pattern-card my-5 mx-1 p-3" />
               
               <div className="mt-4">
                  <h5>Other Behavioral Patterns:</h5>
                  <div className="explanation">
                     <p><b>Chain of Responsibility:</b> Passes requests along a chain of handlers. Good for validation pipelines.</p>
                     <p><b>Template Method:</b> Defines algorithm skeleton, deferring steps to subclasses.</p>
                     <p><b>Mediator:</b> Centralizes communication between objects to reduce coupling.</p>
                     <p><b>Iterator:</b> Provides sequential access to elements without exposing structure.</p>
                  </div>
               </div>
               
               <button className="btn btn-secondary d-block m-auto my-2" onClick={handleClickBehavioral}>
                  Close Behavioral Patterns
               </button>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
}

export default BehavioralPatterns;