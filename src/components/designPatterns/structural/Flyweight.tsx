import React, { useState } from 'react';
import type { CommonProps } from '@types';

const FlyweightExample = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => !prevShowThis);
   };

   const runDemo = () => {
      const result = `Created 1000 characters but only 3 unique flyweights:
- CharacterType 'A' (shared)
- CharacterType 'B' (shared)  
- CharacterType 'C' (shared)
Memory saved: 997 objects!`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Flyweight Pattern</h1>
         <h2>Memory Optimization</h2>
         Flyweight minimizes memory usage by sharing common data between similar objects.
         <br />
         <button className="btn btn-primary" onClick={handleClick}>
            Flyweight Details:
         </button>
         {showThis ? (
            <div id="flyweight">
               <h3>Flyweight Design Pattern:</h3>
               Used when you need to create a large number of similar objects efficiently.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Text editors with character formatting</li>
                  <li>Game objects with shared sprites</li>
                  <li>UI icons and themes</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Text Character Flyweights</h5>
                  <b className="explanation">
                     Share font and style data between characters, store only position externally.
                  </b>
                  <pre className="text-start d-block">
{`// Flyweight: shared intrinsic data
class CharacterType {
  constructor(
    private letter: string,
    private font: string,
    private size: number
  ) {}
  
  render(x: number, y: number) {
    return \`\${this.letter} at (\${x},\${y}) font:\${this.font}\`;
  }
}

// Factory to manage flyweights
class CharacterFactory {
  private static flyweights = new Map<string, CharacterType>();
  
  static getCharacter(letter: string, font: string, size: number) {
    const key = \`\${letter}-\${font}-\${size}\`;
    if (!this.flyweights.has(key)) {
      this.flyweights.set(key, new CharacterType(letter, font, size));
    }
    return this.flyweights.get(key)!;
  }
}

// Context: stores extrinsic data
class Character {
  constructor(
    private flyweight: CharacterType,
    private x: number,
    private y: number
  ) {}
  
  render() {
    return this.flyweight.render(this.x, this.y);
  }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`// Create 1000 'A' characters - only 1 flyweight created
const characters = [];
for (let i = 0; i < 1000; i++) {
  const flyweight = CharacterFactory.getCharacter('A', 'Arial', 12);
  characters.push(new Character(flyweight, i, 0));
}`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  
                  time complexity: O(1) for flyweight access, O(n) memory where n = unique types
               </div>
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default FlyweightExample;