import FrontendSkills from '../skills/FrontendSkills';
import BackendSkills from '../skills/BackendSkills';
import FullstackSkills from '../skills/FullstackSkills';
import DataScienceSkills from '../skills/DataScienceSkills';
import MobileSkills from '../skills/MobileSkills';
import QuantSkills from '../skills/QuantSkills';
import JavaSkills from '../skills/JavaSkills';

export default function TechnicalSkills() {
  return (
    <div>
      <h2 className="text-base font-semibold border-b border-blue-200 pb-1 mb-2 uppercase tracking-wider">
        Compétences Techniques
      </h2>
      <div className="space-y-2 text-sm">
        <FrontendSkills />
        <BackendSkills />
        <FullstackSkills />
        <DataScienceSkills />
        <MobileSkills />
        <QuantSkills />
        <JavaSkills />
      </div>
    </div>
  );
}
