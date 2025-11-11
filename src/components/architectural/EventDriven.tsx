import React, { useState } from 'react';
import type { CommonProps } from '@types';

const EventDriven = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Event: 'user-login' emitted
Listener 1: Analytics tracking user login
Listener 2: Welcome notification sent
Listener 3: User preferences loaded
Event-driven flow completed!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Event-Driven Architecture</h1>
         <h2>Reactive Communication</h2>
         Components communicate via events and listeners. Ideal for async workflows and reactive UIs.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Event-Driven Details:
         </button>
         {showThis ? (
            <div id="event-driven">
               <h3>Event-Driven Architecture:</h3>
               Components communicate through events, promoting loose coupling and scalability.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Reactive user interfaces</li>
                  <li>Microservices communication</li>
                  <li>Real-time applications</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Event Bus System</h5>
                  <b className="explanation">
                     Central event bus manages communication between decoupled components.
                  </b>
                  <b>Event Bus Implementation:</b>
                  <pre className="text-start d-block">
{`// Event Bus - Central event management
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

// Usage Example
const app = () => {
  const eventBus = new EventBus();
  
  // Subscribe to events
  eventBus.subscribe('user-login', (user) => {
    console.log('Analytics: User logged in', user);
  });
  
  // Emit events
  eventBus.emit('user-login', { id: 1, name: 'John' });
};`}</pre>

                  <b>Benefits:</b>
                  <pre className="text-start d-block">
{`// Loose coupling between components
// Scalable and maintainable
// Easy to add new event listeners
// Supports async operations
// Promotes reactive programming`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(n) where n is number of listeners
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default EventDriven;