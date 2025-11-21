import  { useState } from 'react';
import type { CommonProps } from '@types';

const PrototypeExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `Original: { name: "Template", config: { theme: "dark" } }
Clone: { name: "Copy", config: { theme: "dark" } }
Independent objects: true`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Prototype Pattern</h1>
         <h2>Object Cloning</h2>
         Prototype creates new objects by cloning existing instances instead of creating from scratch.
         <br />
         <button className="btn btn-primary" onClick={handleClick}>
            Prototype Details:
         </button>
         {showThis ? (
            <div id="prototype">
               <h3>Prototype Design Pattern:</h3>
               Used when object creation is expensive or complex, and you need similar objects.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Cloning complex configurations</li>
                  <li>Creating similar UI components</li>
                  <li>Game object templates</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Document Template</h5>
                  <b className="explanation">
                     Clone document templates with shared settings but independent content.
                  </b>
                  <pre className="text-start d-block">
{`interface Cloneable {
  clone(): Cloneable;
}

class Document implements Cloneable {
  constructor(
    public name: string,
    public config: { theme: string; font: string }
  ) {}
  
  clone(): Document {
    return new Document(
      this.name,
      { ...this.config } // shallow clone config
    );
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const template = new Document('Template', { theme: 'dark', font: 'Arial' });
const copy = template.clone();
copy.name = 'Copy';
// Both have same config but are independent objects`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(1) for shallow clone, O(n) for deep clone
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default PrototypeExample;