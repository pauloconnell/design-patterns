import React, { useState } from 'react';
import type { CommonProps } from '@types';

const Observer = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Newsletter subscribed: user@example.com
Notification sent: "New article published!"
User notified: user@example.com received notification`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Observer Pattern</h1>
         <h2>Event Notification System</h2>
         Observer allows objects to subscribe and react to changes in another object.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Observer Details:
         </button>
         {showThis ? (
            <div id="observer">
               <h3>Observer Design Pattern:</h3>
               Defines a one-to-many dependency between objects so that when one object changes state, all dependents are notified.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Event systems and reactive UIs</li>
                  <li>State management (Redux, MobX)</li>
                  <li>Model-View architectures</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Newsletter Subscription</h5>
                  <b className="explanation">
                     Users subscribe to newsletter updates and get notified when new content is published.
                  </b>
                  <b>Observer Interface:</b>
                  <pre className="text-start d-block">
{`interface Observer {
  update(message: string): void;
}

class User implements Observer {
  constructor(private email: string) {}
  
  update(message: string): void {
    console.log(\`\${this.email} received: \${message}\`);
  }
}`}</pre>

                  <b>Subject (Newsletter):</b>
                  <pre className="text-start d-block">
{`class Newsletter {
  private observers: Observer[] = [];
  
  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }
  
  notify(message: string): void {
    this.observers.forEach(observer => observer.update(message));
  }
  
  publishArticle(title: string): void {
    this.notify(\`New article: \${title}\`);
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const newsletter = new Newsletter();
const user1 = new User('user@example.com');

newsletter.subscribe(user1);
newsletter.publishArticle('React Best Practices');`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(n) where n is number of observers
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default Observer;