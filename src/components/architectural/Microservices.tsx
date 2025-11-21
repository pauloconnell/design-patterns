import  { useState } from 'react';
import type { CommonProps } from '@types';

const Microservices = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `User Service: User data retrieved
Order Service: Order created successfully
Payment Service: Payment processed
Notification Service: Email sent
Microservices orchestration completed!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Microservices Architecture</h1>
         <h2>Distributed Services</h2>
         App split into independent services with APIs. Enables scalable, modular system design.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Microservices Details:
         </button>
         {showThis ? (
            <div id="microservices">
               <h3>Microservices Architecture:</h3>
               Decomposes applications into small, independent services that communicate via APIs.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Large-scale web applications</li>
                  <li>Cloud-native systems</li>
                  <li>Enterprise platforms</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: E-commerce Platform</h5>
                  <b className="explanation">
                     Independent services handle specific business domains with clear API boundaries.
                  </b>
                  <b>Service Implementation:</b>
                  <pre className="text-start d-block">
{`// User Service API
class UserService {
  private baseUrl = '/api/users';

  async getUser(id: string) {
    const response = await fetch(\`\${this.baseUrl}/\${id}\`);
    return response.json();
  }

  async createUser(userData: { name: string; email: string }) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  }
}

// Order Service API
class OrderService {
  private baseUrl = '/api/orders';

  async getUserOrders(userId: string) {
    const response = await fetch(\`\${this.baseUrl}/user/\${userId}\`);
    return response.json();
  }

  async createOrder(orderData: { userId: string; items: any[] }) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    return response.json();
  }
}

// Payment Service API
class PaymentService {
  private baseUrl = '/api/payments';

  async processPayment(paymentData: { orderId: string; amount: number }) {
    const response = await fetch(\`\${this.baseUrl}/process\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    });
    return response.json();
  }
}

// Frontend orchestrates multiple microservices
class ECommerceOrchestrator {
  private userService = new UserService();
  private orderService = new OrderService();
  private paymentService = new PaymentService();

  async completeOrder(userId: string, items: any[], paymentInfo: any) {
    try {
      // 1. Get user details
      const user = await this.userService.getUser(userId);
      
      // 2. Create order
      const order = await this.orderService.createOrder({ userId, items });
      
      // 3. Process payment
      const payment = await this.paymentService.processPayment({
        orderId: order.id,
        amount: order.total
      });

      return { success: true, order, payment };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

// Service Orchestration
class ECommerceOrchestrator {
  async completeOrder(userId: string, items: any[]) {
    try {
      const user = await userService.getUser(userId);
      const order = await orderService.createOrder({ userId, items });
      const payment = await paymentService.processPayment(order);
      return { success: true, order, payment };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}`}</pre>

                  <b>Benefits:</b>
                  <pre className="text-start d-block">
{`// Independent deployment and scaling
// Technology diversity per service
// Fault isolation
// Team autonomy
// Easier maintenance and testing`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(n) where n is number of service calls
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default Microservices;