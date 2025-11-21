import  { useState } from 'react';
import type { CommonProps } from '@types';

const Command = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Executing: Turn on the light
Undoing: Turn off the light
Executing: Turn on the fan
Command history: [LightOnCommand, FanOnCommand]`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>Command Pattern</h1>
         <h2>Action Encapsulation</h2>
         Command encapsulates a request as an object, allowing you to queue, log, and undo operations.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            Command Details:
         </button>
         {showThis ? (
            <div id="command">
               <h3>Command Design Pattern:</h3>
               Encapsulates a request as an object, thereby letting you parameterize clients with different requests.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>Undo/Redo functionality</li>
                  <li>Macro recording</li>
                  <li>Queue operations</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Smart Home Controller</h5>
                  <b className="explanation">
                     Remote control that can execute and undo various home automation commands.
                  </b>
                  <b>Command Interface:</b>
                  <pre className="text-start d-block">
{`interface Command {
  execute(): void;
  undo(): void;
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  
  execute(): void {
    this.light.turnOn();
  }
  
  undo(): void {
    this.light.turnOff();
  }
}`}</pre>

                  <b>Receiver:</b>
                  <pre className="text-start d-block">
{`class Light {
  private isOn = false;
  
  turnOn(): void {
    this.isOn = true;
    console.log('Light is ON');
  }
  
  turnOff(): void {
    this.isOn = false;
    console.log('Light is OFF');
  }
}`}</pre>

                  <b>Invoker (Remote Control):</b>
                  <pre className="text-start d-block">
{`class RemoteControl {
  private history: Command[] = [];
  
  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }
  
  undo(): void {
    const command = this.history.pop();
    if (command) command.undo();
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
                  time complexity: O(1) for execute/undo
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default Command;