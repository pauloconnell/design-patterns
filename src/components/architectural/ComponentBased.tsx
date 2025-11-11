import { useState } from 'react';
import '../../styles/design-patterns.css';

function ComponentBased() {
   const [showExample, setShowExample] = useState(false);
   const [showDemo, setShowDemo] = useState(false);

   return (
      <div className="architectural-pattern">
         <h4>Component-Based Architecture</h4>
         <p><strong>Importance:</strong> FE: 10/10, FS: 9/10</p>
         <p>UI built from reusable, encapsulated components. Core to React/Vue and scalable frontend architecture.</p>
         
         <button className="btn btn-primary d-block mx-auto my-2" onClick={() => setShowExample(!showExample)}>
            {showExample ? 'Hide' : 'Show'} Code Example
         </button>
         
         {showExample && (
            <div className="code-example">
               <pre><code>{`// Reusable Button Component
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
};`}</code></pre>
               <button className="btn btn-secondary" onClick={() => setShowExample(false)}>Close</button>
            </div>
         )}

         <button className="btn btn-primary d-block mx-auto my-2" onClick={() => setShowDemo(!showDemo)}>
            {showDemo ? 'Hide' : 'Show'} Demo
         </button>
         
         {showDemo && (
            <div className="demo-section">
               <div className="card" style={{border: '1px solid #ddd', padding: '1rem', margin: '1rem 0'}}>
                  <div className="card-header">
                     <h3>User Profile</h3>
                  </div>
                  <div className="card-body">
                     <p>Welcome back, John!</p>
                     <button className="btn btn-primary me-2" onClick={() => alert('Edit Profile clicked!')}>
                        Edit Profile
                     </button>
                     <button className="btn btn-secondary" onClick={() => alert('Logout clicked!')}>
                        Logout
                     </button>
                  </div>
               </div>
               <button className="btn btn-secondary" onClick={() => setShowDemo(false)}>Close Demo</button>
            </div>
         )}
      </div>
   );
}

export default ComponentBased;