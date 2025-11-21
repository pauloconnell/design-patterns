import { useState } from 'react';
import type { CommonProps } from '@types';

const ProxyExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `First call: Loading image... (2s delay)
Second call: Cached image (instant)
Access control: Admin can delete, User cannot`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Proxy Pattern</h1>
         <h2>Controlled Access</h2>
         Proxy controls access to another object, adding caching, lazy loading, or security.
         <br />
         <button className="btn btn-primary" onClick={handleClick}>
            Proxy Details:
         </button>
         {showThis ? (
            <div id="proxy">
               <h3>Proxy Design Pattern:</h3>
               Used to control access to an object by providing a placeholder or surrogate.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Lazy loading of expensive resources</li>
                  <li>Caching API responses</li>
                  <li>Access control and security</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Image Proxy with Caching</h5>
                  <b className="explanation">
                     Proxy loads images lazily and caches them for subsequent requests.
                  </b>
                  <pre className="text-start d-block">
{`interface Image {
  display(): string;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }
  
  private loadFromDisk() {
    console.log(\`Loading \${this.filename}\`);
  }
  
  display() {
    return \`Displaying \${this.filename}\`;
  }
}

class ImageProxy implements Image {
  private realImage?: RealImage;
  
  constructor(private filename: string) {}
  
  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    return this.realImage.display();
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const image = new ImageProxy('photo.jpg');
// Image not loaded yet
image.display(); // Now loads and displays
image.display(); // Uses cached version`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(1) for cached access, O(n) for initial load
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default ProxyExample;