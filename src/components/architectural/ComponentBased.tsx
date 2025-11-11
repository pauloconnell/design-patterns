import React, { useState } from 'react';
import type { CommonProps } from '@types';

const ComponentBased = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Component rendered: <Button text="Edit Profile" variant="primary" />
Component rendered: <Card title="User Profile">...</Card>
Reusable components working together!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Component-Based Architecture</h1>
         <h2>Reusable UI Building Blocks</h2>
         UI built from reusable, encapsulated components. Core to React/Vue and scalable frontend architecture.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Component-Based Details:
         </button>
         {showThis ? (
            <div id="component-based">
               <h3>Component-Based Architecture:</h3>
               Builds applications from reusable, self-contained components with clear interfaces.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>React/Vue component libraries</li>
                  <li>Design systems</li>
                  <li>Modular UI development</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Reusable React Components</h5>
                  <b className="explanation">
                     Components encapsulate logic and UI, promoting reusability and maintainability.
                  </b>
                  <b>Component Definition:</b>
                  <pre className="text-start d-block">
{`// Reusable Button Component
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Card Component
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

// Using components together
const App = () => {
  return (
    <Card title="User Profile">
      <p>Welcome back, John!</p>
      <Button text="Edit Profile" onClick={() => console.log('Edit clicked')} />
      <Button text="Logout" onClick={() => console.log('Logout')} variant="secondary" />
    </Card>
  );
};`}</pre>

                  <b>Usage Benefits:</b>
                  <pre className="text-start d-block">
{`// Reusable across the application
<Button text="Save" onClick={handleSave} />
<Button text="Cancel" onClick={handleCancel} variant="secondary" />

// Composable and testable
<Card title="Settings">
  <Button text="Update Profile" onClick={updateProfile} />
</Card>`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(1) for component rendering
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default ComponentBased;