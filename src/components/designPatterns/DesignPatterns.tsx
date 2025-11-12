import '../../styles/design-patterns.css';
import StructuralPatterns from './structural/StructuralPatterns';
import CreationalPatterns from './creational/CreationalPatterns';
import BehavioralPatterns from './behavioural/BehavioralPatterns';

function DesignPatterns() {

   return (
      <>
         <StructuralPatterns />
         <hr />
         <CreationalPatterns />
         <hr />
         <BehavioralPatterns />
      </>
   );
}

export default DesignPatterns;
