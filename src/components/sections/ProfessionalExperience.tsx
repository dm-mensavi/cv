import Never2WaitExperience from "@/components/experiences/Never2WaitExperience";
import IsiaLabExperience from "@/components/experiences/IsiaLabExperience";
import TradingExperience from "@/components/experiences/TradingExperience";
import ZomujoExperience from "@/components/experiences/ZomujoExperience";
import ZapTechExperience from "@/components/experiences/ZapTechExperience";
import QuantExperience from "../experiences/QuantExperience";

export default function ProfessionalExperience() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider font-georgia">
        Expériences Professionnelles
      </h2>
      <Never2WaitExperience />
      <IsiaLabExperience />
      <ZomujoExperience />
      <TradingExperience />
      <ZapTechExperience />
      <QuantExperience />
    </section>
  );
}