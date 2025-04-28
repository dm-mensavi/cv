import PennyProject from "@/components/projects/PennyProject";
import SkyVaultProject from "@/components/projects/SkyVaultProject";
import EStoreProject from "@/components/projects/EStoreProject";
import LawFirmProject from "../projects/LawFirmProject";
import MentalHealthProject from "../projects/MentalHealthProject";
import RealEstateProject from "../projects/RealEstateProject";
import EcomCloneProject from "../projects/EcomCloneProject";
import ContactAppProject from "../projects/ContactAppProject";
import CamprideProject from "../projects/CamprideProject";
import BeloteProject from "../projects/BeloteProject";
// ... other project imports ...

export default function Projects() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider">
        Projets
      </h2>
      <PennyProject />
      <SkyVaultProject />
      <EStoreProject />
      <LawFirmProject />
      <MentalHealthProject />
      <RealEstateProject />
      <EcomCloneProject />
      <ContactAppProject />
      <CamprideProject />
      <BeloteProject />
    </section>
  );
}