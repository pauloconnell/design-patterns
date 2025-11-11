import React, { useState } from 'react';
import type { CommonProps } from '@types';

const CompositeExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `File System Structure:
📁 root/
  📄 file1.txt (10KB)
  📁 documents/
    📄 doc1.pdf (50KB)
    📄 doc2.txt (5KB)
Total Size: 65KB`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Composite Pattern</h1>
         <h2>Tree Structure Uniformity</h2>
         Composite treats individual objects and groups uniformly in tree structures.
         <br />
         <button className="btn btn-primary" onClick={handleClick}>
            Composite Details:
         </button>
         {showThis ? (
            <div id="composite">
               <h3>Composite Design Pattern:</h3>
               Used when you need to work with tree-like structures where leaves and branches are treated the same.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>File system hierarchies</li>
                  <li>UI component trees</li>
                  <li>Organization charts</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: File System</h5>
                  <b className="explanation">
                     Files and folders both implement the same interface for size calculation.
                  </b>
                  <pre className="text-start d-block">
{`interface FileSystemItem {
  getName(): string;
  getSize(): number;
}

class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}
  getName() { return this.name; }
  getSize() { return this.size; }
}

class Folder implements FileSystemItem {
  private items: FileSystemItem[] = [];
  
  constructor(private name: string) {}
  
  add(item: FileSystemItem) { this.items.push(item); }
  getName() { return this.name; }
  getSize() { return this.items.reduce((sum, item) => sum + item.getSize(), 0); }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const root = new Folder('root');
root.add(new File('file1.txt', 10));
const docs = new Folder('documents');
docs.add(new File('doc1.pdf', 50));
root.add(docs);
console.log(root.getSize()); // 60KB total`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(n) where n is total number of items in tree
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default CompositeExample;