import React, { useState } from 'react';
import type { CSSProperties } from 'react';

// Define the type for the props
type FacadeExampleProps = { className?: string; style?: CSSProperties };

// Subsystems: pretend these are complex utilities
class Logger {
   log(message: string) {
      console.log(`[LOG]: ${message}`);
   }
}

class AuthService {
   authenticate(user: string) {
      return user === 'admin';
   }
}

class DataFetcher {
   fetchData() {
      return ['item1', 'item2', 'item3'];
   }
}

// Facade: simplifies access to subsystems
class AppFacade {
   private logger = new Logger();
   private auth = new AuthService();
   private data = new DataFetcher();

   public run(user: string) {
      this.logger.log(`Authenticating ${user}`);
      const isAuth = this.auth.authenticate(user);
      if (isAuth) {
         this.logger.log('Authentication successful');
         return this.data.fetchData();
      } else {
         this.logger.log('Authentication failed');
         return [];
      }
   }
}

const FacadeExample: React.FC<FacadeExampleProps> = ({ className, style }) => {
   const [showThis, setShowThis] = useState(false);
   const [result, setResult] = useState<string[]>([]);

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         console.log('handled ', !prevShowThis);
         return !prevShowThis;
      });

      const facade = new AppFacade();
      const output = facade.run('admin');
      setResult(output);
   };

   return (
      <section className={className} style={style}>
         <h1>Facade Pattern</h1>
         <h2>Simplified Interface</h2>
         Facade provides a unified interface to a set of interfaces in a subsystem.
         <br />
         <button
            className="btn btn-primary"
            onClick={(e) => {
               handleClick();
               console.log('clicked', e.target);
            }}
         >
            Facade Details:
         </button>
         {showThis ? (
            <div id="facade">
               <h3>Facade Design Pattern:</h3>
               Used to simplify complex systems by exposing a clean interface.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>API wrappers</li>
                  <li>Service orchestration</li>
                  <li>UI logic abstraction</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: AppFacade</h5>
                  <b className="explanation">
                     Combines logging, authentication, and data fetching into one method.
                  </b>
                  <pre className="text-start d-block">
                     <code className="text-start d-block">
                        {`class AppFacade {
  private logger = new Logger();
  private auth = new AuthService();
  private data = new DataFetcher();

  public run(user: string) {
    this.logger.log(\`Authenticating \${user}\`);
    const isAuth = this.auth.authenticate(user);
    if (isAuth) {
      this.logger.log('Authentication successful');
      return this.data.fetchData();
    } else {
      this.logger.log('Authentication failed');
      return [];
    }
  }
}`}
                     </code>
                  </pre>
                  <br />
                  <b>Output:</b>
                  <code className="text-start d-block">{JSON.stringify(result)}</code>
                  <br />
                  time complexity: O(1) per subsystem call
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default FacadeExample;
