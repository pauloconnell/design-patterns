import React, { useState } from 'react';
import type { CommonProps } from '@types';

const State = ({ className, style }: CommonProps) => {
   const [showThis, setShowThis] = useState(false);
   const [demoResult, setDemoResult] = useState<string>('');

   const handleClick = (): void => {
      setShowThis((prevShowThis) => {
         return !prevShowThis;
      });
   };

   const runDemo = () => {
      const result = `Player state: Playing
Action: pause() -> State changed to Paused
Action: play() -> State changed to Playing
Action: stop() -> State changed to Stopped`;
      setDemoResult(result);
   };

   return (
      <section className={className} style={style}>
         <h1>State Pattern</h1>
         <h2>State-Based Behavior</h2>
         State allows an object to change its behavior when its internal state changes.
         <br />
         <button
            className="btn btn-primary"
            onClick={handleClick}
         >
            State Details:
         </button>
         {showThis ? (
            <div id="state">
               <h3>State Design Pattern:</h3>
               Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
               <h4>Common Use Cases:</h4>
               <ul>
                  <li>UI state machines</li>
                  <li>Game character states</li>
                  <li>Workflow management</li>
               </ul>
               <hr />
               <div className="my-3">
                  <h5 className="bold">Example: Media Player</h5>
                  <b className="explanation">
                     Media player that behaves differently based on its current state (playing, paused, stopped).
                  </b>
                  <b>State Interface:</b>
                  <pre className="text-start d-block">
{`interface PlayerState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
}

class PlayingState implements PlayerState {
  play(player: MediaPlayer): void {
    console.log('Already playing');
  }
  
  pause(player: MediaPlayer): void {
    console.log('Pausing playback');
    player.setState(new PausedState());
  }
  
  stop(player: MediaPlayer): void {
    console.log('Stopping playback');
    player.setState(new StoppedState());
  }
}`}</pre>

                  <b>Context (Media Player):</b>
                  <pre className="text-start d-block">
{`class MediaPlayer {
  private state: PlayerState;
  
  constructor() {
    this.state = new StoppedState();
  }
  
  setState(state: PlayerState): void {
    this.state = state;
  }
  
  play(): void { this.state.play(this); }
  pause(): void { this.state.pause(this); }
  stop(): void { this.state.stop(this); }
}`}</pre>

                  <b>Usage:</b>
                  <pre className="text-start d-block">
{`const player = new MediaPlayer();
player.play();  // Starts playing
player.pause(); // Pauses
player.play();  // Resumes
player.stop();  // Stops`}</pre>

                  <button className="btn btn-secondary btn-sm my-2" onClick={runDemo}>
                     Run Demo
                  </button>
                  {demoResult && (
                     <div className="alert alert-info">
                        <pre>{demoResult}</pre>
                     </div>
                  )}
                  <br />
                  time complexity: O(1) for state transitions
               </div>
               <br />
            </div>
         ) : (
            <div className="my-2">Click button to show details</div>
         )}
      </section>
   );
};

export default State;