import React, { useState } from 'react';
import type { CSSProperties } from 'react';

// Define the type for the props
type AdapterExampleProps = { className?: string; style?: CSSProperties };

// Legacy API response format
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
};

// Adapter function to convert legacy format to modern format
function adaptUser(legacy: LegacyUser): ModernUser {
   return {
      id: legacy.id,
      name: legacy.full_name,
      active: legacy.is_active === 1,
   };
}

const AdapterExample: React.FC<AdapterExampleProps> = ({ className, style }) => {
   const [showThis, setShowThis] = useState(false);
   const [user, setUser] = useState<ModernUser | null>(null);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });

      // Simulate legacy data
      const legacyUser: LegacyUser = {
         id: 101,
         full_name: 'Jane Doe',
         is_active: 1,
      };

      const adapted = adaptUser(legacyUser);
      setUser(adapted);
   };

   return (
      <section className={className} style={style}>
         <h1>Adapter Pattern</h1>
         <h2>Interface Translator</h2>
         Adapter converts one interface into another that a client expects.
         <br />
         <button
            className="btn btn-primary"
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
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
                  <pre className="text-start d-block">
                     <code>
                        {`function adaptUser(legacy: LegacyUser): ModernUser {
  return {
    // NOTE: adapt legacy data to modern format
    id: legacy.id,
    name: legacy.full_name,
    active: legacy.is_active === 1,
  };
}`}
                     </code>
                  </pre>
                  <br />
                  <b>Adapted Output:</b>
                  <code className="text-start d-block">
                     {user ? JSON.stringify(user) : 'No user loaded'}
                  </code>
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
