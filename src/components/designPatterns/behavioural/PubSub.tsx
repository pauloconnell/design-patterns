import { useState } from 'react';
import type { CommonProps } from '@types';

const PubSub = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Publisher: User logged in
Subscriber 1: Analytics service logged event
Subscriber 2: Email service sent welcome email
Subscriber 3: Notification service updated UI
Pub/Sub pattern completed!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Publish-Subscribe Pattern</h1>
         <h2>Decoupled Messaging</h2>
         Publishers emit events without knowing who will receive them. Subscribers listen for specific events.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Pub/Sub Details:
         </button>
         {showThis ? (
            <div id="pubsub">
               <h3>Publish-Subscribe Pattern:</h3>
               Decouples message producers from consumers through an event broker or message bus.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Event-driven architectures</li>
                  <li>Real-time notifications</li>
                  <li>Microservices communication</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Event Bus System</h5>
                  <b className="explanation">
                     Publishers emit events to topics, subscribers receive events they're interested in.
                  </b>
                  <b>Event Bus Implementation:</b>
                  <pre className="text-start d-block">
{`class EventBus {
  private subscribers: Map<string, Function[]> = new Map();
  
  subscribe(event: string, callback: Function): void {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event)!.push(callback);
  }
  
  unsubscribe(event: string, callback: Function): void {
    const callbacks = this.subscribers.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    }
  }
  
  publish(event: string, data?: any): void {
    const callbacks = this.subscribers.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }
}`}</pre>

                  <b>Publishers:</b>
                  <pre className="text-start d-block">
{`class UserService {
  constructor(private eventBus: EventBus) {}
  
  login(user: User): void {
    // Business logic
    this.authenticateUser(user);
    
    // Publish event
    this.eventBus.publish('user:login', { 
      userId: user.id, 
      timestamp: Date.now() 
    });
  }
}`}</pre>

                  <b>Subscribers:</b>
                  <pre className="text-start d-block">
{`class AnalyticsService {
  constructor(eventBus: EventBus) {
    eventBus.subscribe('user:login', this.trackLogin.bind(this));
  }
  
  trackLogin(data: any): void {
    console.log('Analytics: User login tracked', data);
  }
}

class EmailService {
  constructor(eventBus: EventBus) {
    eventBus.subscribe('user:login', this.sendWelcomeEmail.bind(this));
  }
  
  sendWelcomeEmail(data: any): void {
    console.log('Email: Welcome email sent to', data.userId);
  }
}`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(n) where n is number of subscribers
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default PubSub;