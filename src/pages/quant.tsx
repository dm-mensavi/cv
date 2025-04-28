import "@/styles/printStyles.css";

// Left Column
import ProfileHeader from "@/components/ui/ProfileHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import Languages from "@/components/ui/Languages";
import Accomplishments from "@/components/ui/Accomplishments";

//Right Column
import ProfessionalObjective from "@/components/sections/ProfessionalObjective";
import Education from "@/components/sections/Education";
import Interests from "@/components/sections/Interests";

// Skills
import FrontendSkills from "@/components/skills/FrontendSkills";
import BackendSkills from "@/components/skills/BackendSkills";
import FullstackSkills from "@/components/skills/FullstackSkills";
import DataScienceSkills from "@/components/skills/DataScienceSkills";
import MobileSkills from "@/components/skills/MobileSkills";
import QuantSkills from "@/components/skills/QuantSkills";
import JavaSkills from "@/components/skills/JavaSkills";

// Experiences
import Never2WaitExperience from "@/components/experiences/Never2WaitExperience";
import IsiaLabExperience from "@/components/experiences/IsiaLabExperience";
import TradingExperience from "@/components/experiences/TradingExperience";
import ZomujoExperience from "@/components/experiences/ZomujoExperience";
import ZapTechExperience from "@/components/experiences/ZapTechExperience";
import QuantExperience from "@/components/experiences/QuantExperience";

// Projects
import PennyProject from "@/components/projects/PennyProject";
import SkyVaultProject from "@/components/projects/SkyVaultProject";
import EStoreProject from "@/components/projects/EStoreProject";
import LawFirmProject from "@/components/projects/LawFirmProject";
import MentalHealthProject from "@/components/projects/MentalHealthProject";
import RealEstateProject from "@/components/projects/RealEstateProject";
import EcomCloneProject from "@/components/projects/EcomCloneProject";
import ContactAppProject from "@/components/projects/ContactAppProject";
import CamprideProject from "@/components/projects/CamprideProject";
import BeloteProject from "@/components/projects/BeloteProject";

export default function QuantCV() {
	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 font-sans print:bg-white print:py-0 print:m-0">
			<div className="w-[210mm] max-w-[210mm] mx-auto bg-white shadow-lg py-0 print:my-0 print:shadow-none print:border-none">
				<div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12">
					<aside className="bg-blue-800 text-white p-6 py-14 space-y-6 md:col-span-4 print:col-span-4 font-arial">
						<ProfileHeader role="Développeur Quant" />
						<ContactInfo />

						{/* Technical Skill */}
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

						<Languages />
						<Accomplishments />
					</aside>

					<main className="p-6 py-14 space-y-6 md:col-span-8 print:col-span-8 font-arial">
						<ProfessionalObjective />
						<Education />

						{/* Professional Experience */}
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

            {/* Projects  */}
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
						<Interests />
					</main>
				</div>
			</div>
		</div>
	);
}
