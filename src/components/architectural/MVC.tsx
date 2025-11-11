import { useState } from 'react';
import '../../styles/design-patterns.css';

function MVC() {
   const [showExample, setShowExample] = useState(false);
   const [showDemo, setShowDemo] = useState(false);

   return (
      <div className="architectural-pattern">
         <h4>MVC (Model-View-Controller)</h4>
         <p><strong>Importance:</strong> FE: 8/10, FS: 9/10</p>
         <p>Separates data (Model), UI (View), and logic (Controller). Useful for organizing full-stack applications.</p>
         
         <button className="btn btn-primary d-block mx-auto my-2" onClick={() => setShowExample(!showExample)}>
            {showExample ? 'Hide' : 'Show'} Code Example
         </button>
         
         {showExample && (
            <div className="code-example">
               <pre><code>{`// Model - Data and business logic
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

  const handleDeleteUser = (id: number) => {
    model.deleteUser(id);
    setUsers([...model.getUsers()]);
  };

  return (
    <UserView 
      users={users}
      onAddUser={handleAddUser}
      onDeleteUser={handleDeleteUser}
    />
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
               <p><strong>MVC Demo:</strong> Model handles data, View displays UI, Controller manages interactions</p>
               <div style={{border: '1px solid #ddd', padding: '1rem', margin: '1rem 0'}}>
                  <h5>User Management (MVC Pattern)</h5>
                  <p><em>Model:</em> Stores user data</p>
                  <p><em>View:</em> Form and list display</p>
                  <p><em>Controller:</em> Handles add/delete actions</p>
                  <div style={{backgroundColor: '#f8f9fa', padding: '0.5rem', marginTop: '1rem'}}>
                     <small>In a real app, this would be a fully functional user management system</small>
                  </div>
               </div>
               <button className="btn btn-secondary" onClick={() => setShowDemo(false)}>Close Demo</button>
            </div>
         )}
      </div>
   );
}

export default MVC;