import ProfileHeader from "@/components/ui/ProfileHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import Languages from "@/components/ui/Languages";
import Accomplishments from "@/components/ui/Accomplishments";

export default function LeftColumn() {
  return (
    <aside className="bg-blue-800 text-white p-6 py-14 space-y-6 md:col-span-4 print:col-span-4 font-arial">
      <ProfileHeader role="" />
      <ContactInfo />
      <TechnicalSkills />
      <Languages />
      <Accomplishments />
    </aside>
  );
}