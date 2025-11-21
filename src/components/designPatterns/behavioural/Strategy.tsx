import  { useState } from 'react';
import type { CommonProps } from '@types';

const Strategy = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Credit Card: Processing $100 payment via credit card
PayPal: Processing $100 payment via PayPal
Crypto: Processing $100 payment via cryptocurrency`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Strategy Pattern</h1>
         <h2>Algorithm Selection</h2>
         Strategy enables selecting an algorithm at runtime from a family of algorithms.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Strategy Details:
         </button>
         {showThis ? (
            <div id="strategy">
               <h3>Strategy Design Pattern:</h3>
               Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Payment processing methods</li>
                  <li>Sorting algorithms</li>
                  <li>Validation strategies</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Payment Processing</h5>
                  <b className="explanation">
                     Different payment methods can be selected at runtime without changing the payment context.
                  </b>
                  <b>Strategy Interface:</b>
                  <pre className="text-start d-block">
{`interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Processing $\${amount} payment via credit card\`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Processing $\${amount} payment via PayPal\`);
  }
}`}</pre>

                  <b>Context:</b>
                  <pre className="text-start d-block">
{`class PaymentProcessor {
  private strategy: PaymentStrategy;
  
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }
  
  processPayment(amount: number): void {
    this.strategy.pay(amount);
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const processor = new PaymentProcessor();

processor.setStrategy(new CreditCardPayment());
processor.processPayment(100);

processor.setStrategy(new PayPalPayment());
processor.processPayment(100);`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(1) for strategy selection
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default Strategy;