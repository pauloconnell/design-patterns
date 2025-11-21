import { useState } from 'react';
import type { CommonProps } from '@types';



const AdapterExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Legacy: { id: 101, full_name: "Jane Doe", is_active: 1 }\nModern: { id: 101, name: "Jane Doe", active: true }`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Adapter Pattern</h1>
         <h2>Interface Translator</h2>
         Adapter converts one interface into another that a client expects.
         <br />
         <button
            className="btn btn-primary"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            Adapter Details:
         </button>
         {showThis ? (
            <div id="adapter">
               <h3>Adapter Design Pattern:</h3>
               Used to make incompatible interfaces work together.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Integrating third-party APIs</li>
                  <li>Normalizing legacy data</li>
                  <li>Bridging mismatched component props</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: LegacyUser → ModernUser</h5>
                  <b className="explanation">
                     Converts legacy API format into the shape expected by modern
                     components.
                  </b>
                  <b>Type Definitions:</b>
                  <pre className="text-start d-block">
{`// Legacy API response format
type LegacyUser = {
  id: number;
  full_name: string;
  is_active: number; // 1 or 0
};

// Modern format expected by your component
type ModernUser = {
  id: number;
  name: string;
  active: boolean;
};`}</pre>

                  <b>Adapter Function:</b>
                  <pre className="text-start d-block">
{`function adaptUser(legacy: LegacyUser): ModernUser {
  return {
    id: legacy.id,
    name: legacy.full_name,
    active: legacy.is_active === 1,
  };
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const legacyData = { id: 101, full_name: "Jane Doe", is_active: 1 };
const modernData = adaptUser(legacyData);
console.log(modernData); // { id: 101, name: "Jane Doe", active: true }`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(1)
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default AdapterExample;
