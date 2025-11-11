import React, { useState } from 'react';
import type { CommonProps } from '@types';

const FactoryExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `Button: <button class="btn-primary">Click me</button>
Input: <input type="text" class="form-control" placeholder="Enter text">
Modal: <div class="modal">Modal Content</div>`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Factory Method Pattern</h1>
         <h2>Object Creation Interface</h2>
         Factory Method creates objects without specifying exact classes, delegating instantiation to subclasses.
         <br />
         <button className="btn btn-primary d-block mx-auto my-2" onClick={handleClick}>
            Factory Details:
         </button>
         {showThis ? (
            <div id="factory">
               <h3>Factory Method Design Pattern:</h3>
               Used when you need to create objects but want to let subclasses decide which class to instantiate.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>UI component factories</li>
                  <li>Database connection factories</li>
                  <li>API client factories</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: UI Component Factory</h5>
                  <b className="explanation">
                     Create different UI components based on type without knowing specific classes.
                  </b>
                  <pre className="text-start d-block">
{`interface UIComponent {
  render(): string;
}

class Button implements UIComponent {
  render() { return '<button class="btn-primary">Click me</button>'; }
}

class Input implements UIComponent {
  render() { return '<input type="text" class="form-control" placeholder="Enter text">'; }
}

class Modal implements UIComponent {
  render() { return '<div class="modal">Modal Content</div>'; }
}

class ComponentFactory {
  static create(type: string): UIComponent {
    switch (type) {
      case 'button': return new Button();
      case 'input': return new Input();
      case 'modal': return new Modal();
      default: throw new Error('Unknown component type');
    }
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const button = ComponentFactory.create('button');
const input = ComponentFactory.create('input');
const modal = ComponentFactory.create('modal');

console.log(button.render());
console.log(input.render());
console.log(modal.render());`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(1) for object creation
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default FactoryExample;