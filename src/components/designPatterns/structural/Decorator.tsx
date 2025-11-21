import  { useState } from 'react';
import type { CommonProps } from '@types';

const DecoratorExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `Basic Coffee: $2
+ Milk: $2.50
+ Sugar: $2.75
+ Whip: $3.25`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Decorator Pattern</h1>
         <h2>Dynamic Behavior Addition</h2>
         Decorator adds new functionality to objects without modifying their structure.
         <br />
         <button className="btn btn-primary" onClick={handleClick}>
            Decorator Details:
         </button>
         {showThis ? (
            <div id="decorator">
               <h3>Decorator Design Pattern:</h3>
               Used to extend object behavior dynamically without altering the original class.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Adding features to UI components</li>
                  <li>Middleware in request processing</li>
                  <li>Adding validation or logging</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Coffee Decorators</h5>
                  <b className="explanation">
                     Add ingredients to coffee without changing the base Coffee class.
                  </b>
                  <pre className="text-start d-block">
{`interface Coffee {
  cost(): number;
  description(): string;
}

class BasicCoffee implements Coffee {
  cost() { return 2; }
  description() { return 'Basic Coffee'; }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}
  
  cost() { return this.coffee.cost() + 0.5; }
  description() { return this.coffee.description() + ' + Milk'; }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`let coffee = new BasicCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.description(), coffee.cost());`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(n) where n is number of decorators
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default DecoratorExample;