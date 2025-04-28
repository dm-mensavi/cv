import ProfessionalObjective from "@/components/sections/ProfessionalObjective";
import Education from "@/components/sections/Education";
import ProfessionalExperience from "@/components/sections/ProfessionalExperience";
import Projects from "@/components/sections/Projects";
import Interests from "@/components/sections/Interests";

export default function RightColumn() {
  return (
    <main className="p-6 py-14 space-y-6 md:col-span-8 print:col-span-8 font-arial">
      <ProfessionalObjective />
      <Education />
      <ProfessionalExperience />
      <Projects />
      <Interests />
    </main>
  );
}