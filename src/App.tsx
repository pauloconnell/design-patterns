
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DepthFirstSearch, {
   type DepthFirstSearchProps,
} from './components/architectural/DepthFirstSearch';
import BreadthFirstSearch from './components/architectural/BreadthFirstSearch';
import Facade from './components/structural/Facade';
import Adaptor from './components/structural/Adaptor';

function App() {
   

   return (
      <>
         <div>
            <a href="https://vite.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
       
         <h1>Design Patterns:</h1>
         <hr />

         <h2>Architectural Patterns</h2>
         <div className="my-3">
            <h5 className="bold">Graph Traversal</h5>
            <b className="explanation">
               Graph traversal is a process of visiting each node in a graph data
               structure, such as a tree or a graph.
            </b>

            <DepthFirstSearch className="my-5 mx-1 p-1 border rounded" />
            <BreadthFirstSearch className="my-5 mx-1 p-1 border rounded" />
         </div>
         <hr />
         <h2> Structural Patterns</h2>

         <div className="my-3">
            <b className="explanation">
               Structural patterns focus on how components and classes are organized and
               interact. They help simplify complex systems, promote reusability, and make
               integration easier by defining clear relationships between parts of an
               application.
            </b>

            <h5 className="bold">Adapter</h5>
            <b className="explanation">
               The Adapter pattern is a structural design pattern that allows objects with
               incompatible interfaces to work together. It acts as a bridge between two
               incompatible interfaces, converting the interface of one class into another
               interface that a client expects.
            </b>
            <Adaptor />
         </div>

         <div className="my-3">
            <h5 className="bold">Facade</h5>
            <b className="explanation">
               The Facade pattern provides a simplified interface to a complex subsystem,
               making it easier to use and understand. It acts as a high-level interface
               that hides the complexities of the underlying subsystem, providing a
               simplified and unified interface to the client.
            </b>
            <Facade className="my-5 mx-1 p-1 border rounded" />
         </div>

         <div className="my-3">
            <h5 className="bold"></h5>
         </div>
<hr />
         <h2>Creational Patterns</h2>
      </>
   );
}

export default App;
