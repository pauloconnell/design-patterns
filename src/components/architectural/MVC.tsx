import React, { useState } from 'react';
import type { CommonProps } from '@types';

const MVC = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Model: User data stored and managed
View: User list rendered with form
Controller: Add/Delete actions coordinated
MVC separation achieved!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>MVC Architecture</h1>
         <h2>Separation of Concerns</h2>
         Separates data (Model), UI (View), and logic (Controller). Useful for organizing full-stack applications.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            MVC Details:
         </button>
         {showThis ? (
            <div id="mvc">
               <h3>MVC Design Pattern:</h3>
               Separates application logic into three interconnected components for better organization.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Web application architecture</li>
                  <li>Full-stack development</li>
                  <li>Enterprise applications</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: User Management System</h5>
                  <b className="explanation">
                     Model manages data, View handles presentation, Controller coordinates interactions.
                  </b>
                  <b>Model (Data Layer):</b>
                  <pre className="text-start d-block">
{`// Model - Data and business logic
class UserModel {
  private users: { id: number; name: string; email: string }[] = [];

  addUser(name: string, email: string) {
    const newUser = { id: Date.now(), name, email };
    this.users.push(newUser);
    return newUser;
  }

  getUsers() {
    return this.users;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}

// View - UI Components
interface ViewProps {
  users: { id: number; name: string; email: string }[];
  onAddUser: (name: string, email: string) => void;
  onDeleteUser: (id: number) => void;
}

const UserView: React.FC<ViewProps> = ({ users, onAddUser, onDeleteUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onAddUser(name, email);
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Controller - Manages Model and View interaction
const UserController = () => {
  const [model] = useState(new UserModel());
  const [users, setUsers] = useState(model.getUsers());

  const handleAddUser = (name: string, email: string) => {
    model.addUser(name, email);
    setUsers([...model.getUsers()]);
  };

  return <UserView users={users} onAddUser={handleAddUser} />;
};`}</pre>

                  <b>Benefits:</b>
                  <pre className="text-start d-block">
{`// Clear separation of concerns
// Model: Business logic and data
// View: User interface
// Controller: Coordinates between Model and View

// Testable components
// Maintainable codebase
// Scalable architecture`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(1) for MVC coordination
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default MVC;