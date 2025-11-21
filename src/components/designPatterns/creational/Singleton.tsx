import  { useState } from 'react';
import type { CommonProps } from '@types';

const SingletonExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      // Simulate singleton behavior for demo
      const result = `Instance 1 === Instance 2: true\nBoth instances share same config`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Singleton Pattern</h1>
         <h2>Global Instance Access</h2>
         Ensures a class has only one instance and provides a global point of access to it.
         <br />
         <button
            className="btn btn-primary"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
               handleClick();
               console.log('clicked', e.currentTarget);
            }}
         >
            Singleton Details:
         </button>
         {showThis ? (
            <div id="singleton">
               <h3>Singleton Design Pattern:</h3>
               Used when exactly one object is needed to coordinate actions across the system.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Global configuration manager</li>
                  <li>Logging service</li>
                  <li>Database connection pool</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: ConfigManager Singleton</h5>
                  <b className="explanation">
                     The class ensures only one instance is created and reused throughout the app.
                  </b>
                  <pre className="text-start d-block">
{`class ConfigManager {
  private static instance: ConfigManager;
  private constructor() { /* private constructor */ }
  
  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();
console.log(config1 === config2); // true`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(1) for access
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default SingletonExample;
