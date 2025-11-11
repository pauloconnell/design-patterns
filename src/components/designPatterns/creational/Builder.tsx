import React, { useState } from 'react';
import type { CommonProps } from '@types';

const BuilderExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `Pizza: { size: "large", crust: "thin", toppings: ["pepperoni", "cheese"] }`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Builder Pattern</h1>
         <h2>Step-by-Step Construction</h2>
         Builder allows constructing complex objects step by step with flexible configuration.
         <br />
         <button className="btn btn-primary" onClick={handleClick}>
            Builder Details:
         </button>
         {showThis ? (
            <div id="builder">
               <h3>Builder Design Pattern:</h3>
               Used to construct complex objects with many optional parameters.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Form builders with optional fields</li>
                  <li>Configuration objects</li>
                  <li>SQL query builders</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Pizza Builder</h5>
                  <b className="explanation">
                     Build a pizza with customizable size, crust, and toppings.
                  </b>
                  <pre className="text-start d-block">
{`class PizzaBuilder {
  private pizza = { size: '', crust: '', toppings: [] as string[] };
  
  setSize(size: string) {
    this.pizza.size = size;
    return this;
  }
  
  setCrust(crust: string) {
    this.pizza.crust = crust;
    return this;
  }
  
  addTopping(topping: string) {
    this.pizza.toppings.push(topping);
    return this;
  }
  
  build() {
    return { ...this.pizza };
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const pizza = new PizzaBuilder()
  .setSize('large')
  .setCrust('thin')
  .addTopping('pepperoni')
  .addTopping('cheese')
  .build();`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(n) where n is number of configuration steps
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default BuilderExample;