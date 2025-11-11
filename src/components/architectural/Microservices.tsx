import { useState } from 'react';
import '../../styles/design-patterns.css';

function Microservices() {
   const [showExample, setShowExample] = useState(false);
   const [showDemo, setShowDemo] = useState(false);

   return (
      <div className="architectural-pattern">
         <h4>Microservices Architecture</h4>
         <p><strong>Importance:</strong> FE: 5/10, FS: 10/10</p>
         <p>App split into independent services with APIs. Enables scalable, modular system design.</p>
         
         <button className="btn btn-primary d-block mx-auto my-2" onClick={() => setShowExample(!showExample)}>
            {showExample ? 'Hide' : 'Show'} Code Example
         </button>
         
         {showExample && (
            <div className="code-example">
               <pre><code>{`// User Service API
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

// React component using microservices
const CheckoutComponent = () => {
  const [orchestrator] = useState(new ECommerceOrchestrator());
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const result = await orchestrator.completeOrder(
      'user123',
      [{ id: 1, name: 'Product A', price: 29.99 }],
      { cardNumber: '****-****-****-1234' }
    );
    setLoading(false);
    
    if (result.success) {
      alert('Order completed successfully!');
    } else {
      alert('Order failed: ' + result.error);
    }
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? 'Processing...' : 'Complete Order'}
    </button>
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
                  <h5>Microservices Demo</h5>
                  <p>E-commerce system with separate services:</p>
                  
                  <div className="row">
                     <div className="col-md-4">
                        <div className="card mb-2">
                           <div className="card-body">
                              <h6 className="card-title">👤 User Service</h6>
                              <p className="card-text">Manages user data and authentication</p>
                              <small className="text-muted">Port: 3001</small>
                           </div>
                        </div>
                     </div>
                     
                     <div className="col-md-4">
                        <div className="card mb-2">
                           <div className="card-body">
                              <h6 className="card-title">📦 Order Service</h6>
                              <p className="card-text">Handles order creation and management</p>
                              <small className="text-muted">Port: 3002</small>
                           </div>
                        </div>
                     </div>
                     
                     <div className="col-md-4">
                        <div className="card mb-2">
                           <div className="card-body">
                              <h6 className="card-title">💳 Payment Service</h6>
                              <p className="card-text">Processes payments and transactions</p>
                              <small className="text-muted">Port: 3003</small>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-3">
                     <button 
                        className="btn btn-success"
                        onClick={() => alert('Demo: Order would orchestrate calls to User → Order → Payment services')}
                     >
                        Simulate Complete Order
                     </button>
                  </div>
               </div>
               <button className="btn btn-secondary" onClick={() => setShowDemo(false)}>Close Demo</button>
            </div>
         )}
      </div>
   );
}

export default Microservices;