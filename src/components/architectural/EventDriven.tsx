import { useState, useEffect } from 'react';
import '../../styles/design-patterns.css';

function EventDriven() {
   const [showExample, setShowExample] = useState(false);
   const [showDemo, setShowDemo] = useState(false);
   const [messages, setMessages] = useState<string[]>([]);

   return (
      <div className="architectural-pattern">
         <h4>Event-Driven Architecture</h4>
         <p><strong>Importance:</strong> FE: 9/10, FS: 9/10</p>
         <p>Components communicate via events and listeners. Ideal for async workflows and reactive UIs.</p>
         
         <button className="btn btn-primary d-block mx-auto my-2" onClick={() => setShowExample(!showExample)}>
            {showExample ? 'Hide' : 'Show'} Code Example
         </button>
         
         {showExample && (
            <div className="code-example">
               <pre><code>{`// Event Bus - Central event management
class EventBus {
  private events: { [key: string]: Function[] } = {};

  subscribe(event: string, callback: Function) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  unsubscribe(event: string, callback: Function) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }

  emit(event: string, data?: any) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

const eventBus = new EventBus();

// Publisher Component
const NotificationPublisher = () => {
  const sendNotification = (type: string, message: string) => {
    eventBus.emit('notification', { type, message, timestamp: Date.now() });
  };

  return (
    <div>
      <button onClick={() => sendNotification('success', 'Task completed!')}>
        Send Success
      </button>
      <button onClick={() => sendNotification('error', 'Something went wrong!')}>
        Send Error
      </button>
    </div>
  );
};

// Subscriber Component
const NotificationListener = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNotification = (data) => {
      setNotifications(prev => [...prev, data]);
    };

    eventBus.subscribe('notification', handleNotification);
    
    return () => {
      eventBus.unsubscribe('notification', handleNotification);
    };
  }, []);

  return (
    <div>
      <h4>Notifications:</h4>
      {notifications.map((notif, index) => (
        <div key={index} className={\`alert alert-\${notif.type === 'error' ? 'danger' : 'success'}\`}>
          {notif.message} - {new Date(notif.timestamp).toLocaleTimeString()}
        </div>
      ))}
    </div>
  );
};

// Main App using Event-Driven pattern
const EventDrivenApp = () => {
  return (
    <div>
      <NotificationPublisher />
      <NotificationListener />
    </div>
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
               <div style={{border: '1px solid #ddd', padding: '1rem', margin: '1rem 0'}}>
                  <h5>Event-Driven Demo</h5>
                  <div className="mb-3">
                     <button 
                        className="btn btn-success me-2" 
                        onClick={() => setMessages(prev => [...prev, `✅ Success: Task completed! (${new Date().toLocaleTimeString()})`])}
                     >
                        Emit Success Event
                     </button>
                     <button 
                        className="btn btn-danger me-2" 
                        onClick={() => setMessages(prev => [...prev, `❌ Error: Something went wrong! (${new Date().toLocaleTimeString()})`])}
                     >
                        Emit Error Event
                     </button>
                     <button 
                        className="btn btn-warning" 
                        onClick={() => setMessages([])}
                     >
                        Clear Events
                     </button>
                  </div>
                  
                  <div>
                     <h6>Event Log:</h6>
                     {messages.length === 0 ? (
                        <p><em>No events yet. Click buttons above to emit events.</em></p>
                     ) : (
                        <ul className="list-group">
                           {messages.map((msg, index) => (
                              <li key={index} className="list-group-item">{msg}</li>
                           ))}
                        </ul>
                     )}
                  </div>
               </div>
               <button className="btn btn-secondary" onClick={() => setShowDemo(false)}>Close Demo</button>
            </div>
         )}
      </div>
   );
}

export default EventDriven;